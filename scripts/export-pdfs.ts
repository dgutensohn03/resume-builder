import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import { resumeCategories } from '../data/categories';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { ResumeDocument } from '../components/ResumeDocument';
async function main() {
 const base = (process.env.RESUME_BASE_URL ?? 'http://localhost:3000').replace(/\/$/, '');
 await fs.mkdir('output',{recursive:true});
 const browser=await chromium.launch();
 try { const page=await browser.newPage();
 const privateFile = process.argv[2];
 if (privateFile) {
  const overrides = JSON.parse(await fs.readFile(privateFile, 'utf8'));
  const { category, baseCategory, ...changes } = overrides;
  if (!/^[a-z0-9-]+$/.test(category) || !Object.hasOwn(resumeCategories, baseCategory)) throw new Error('Invalid private category configuration');
  const profile = { ...resumeCategories[baseCategory], ...changes };
  const css = await fs.readFile('app/globals.css', 'utf8');
  await page.setContent(`<!doctype html><html lang="en"><head><meta charset="utf-8"><style>${css}</style></head><body>${renderToStaticMarkup(createElement(ResumeDocument, { profile }))}</body></html>`);
  await page.pdf({path:`output/daniel-gutensohn-${category}.pdf`,format:'Letter',preferCSSPageSize:true,printBackground:true});
  console.log(`Exported private profile: ${category}`);
  return;
 }
 for(const category of Object.keys(resumeCategories)) {
  const response=await page.goto(`${base}/resume/${category}/`,{waitUntil:'networkidle'});
  if(!response?.ok()) throw new Error(`Unable to load ${category}: ${response?.status()}`);
  await page.pdf({path:`output/daniel-gutensohn-${category}.pdf`,format:'Letter',preferCSSPageSize:true,printBackground:true});
  console.log(`Exported ${category}`);
 }} finally { await browser.close(); }
}
main().catch(error=>{console.error(error);process.exitCode=1;});

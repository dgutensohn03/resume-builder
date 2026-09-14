import { notFound } from 'next/navigation';
import { resumeCategories } from '@/data/categories';
import { ResumeDocument } from '@/components/ResumeDocument';
import { ResumeControls } from '@/components/ResumeControls';
export const dynamicParams = false;
export function generateStaticParams() { return Object.keys(resumeCategories).map(category=>({category})); }
export async function generateMetadata({params}: {params: Promise<{category:string}>}) { const {category}=await params; return {title: resumeCategories[category]?.label ?? 'Resume'}; }
export default async function Page({params}: {params: Promise<{category:string}>}) { const {category}=await params; if(!Object.hasOwn(resumeCategories,category)) notFound(); return <div className="resume-page"><ResumeControls/><ResumeDocument profile={resumeCategories[category]}/></div>; }

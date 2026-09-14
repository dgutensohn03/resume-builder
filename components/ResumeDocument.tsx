import { resumeData as data } from '@/data/resume';
import type { Profile } from '@/data/categories';
export function ResumeDocument({ profile }: {profile: Profile}) { return <main id="main" className="resume-document">
 <header className="resume-header"><p className="eyebrow">Engineering · Experience · Impact</p><h1>{data.personal.name}</h1><h2>{profile.headline}</h2><p className="contact">{data.personal.location}{profile.availability ? ` · ${profile.availability}` : ''}</p><nav aria-label="Professional links" className="links">{Object.entries(data.personal.links).map(([label,url])=><a key={label} href={url}>{label}</a>)}</nav></header>
 <section><h3>Profile</h3><p>{profile.summary}</p></section>
 <section><h3>Core technologies</h3><div className="skills-grid">{profile.skills.map(key=><div key={key}><strong>{data.skills[key].label}</strong><p>{data.skills[key].items.join(' · ')}</p></div>)}</div></section>
 <section><h3>Professional experience</h3>{data.experience.map(job=><article key={job.id}><div className="job-heading"><h4>{job.company}</h4><span>{job.dates}</span></div><p className="job-title">{job.title} <span>· {job.location}</span></p><ul>{Object.values(job.bullets).map(bullet=><li key={bullet}>{bullet}</li>)}</ul></article>)}</section>
 <section><h3>Selected project</h3><h4>{data.project.title}</h4><p>{data.project.text}</p></section>
 <section><h3>Education</h3><p>{data.education}</p></section>
 </main>; }

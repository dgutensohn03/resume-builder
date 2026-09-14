export const resumeData = {
 personal: { name: 'Daniel Gutensohn', location: 'Littleton, CO', links: { Portfolio: 'https://dgutensohn03.github.io/dg-portfolio/', LinkedIn: 'https://www.linkedin.com/in/daniel-gutensohn', GitHub: 'https://github.com/dgutensohn03' } },
 skills: {
  frontend: { label: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS', 'Sass'] },
  architecture: { label: 'Architecture', items: ['Reusable components', 'Design systems', 'REST APIs', 'Responsive design'] },
  accessibility: { label: 'UX & accessibility', items: ['WCAG 2.1 AA', 'Semantic HTML', 'Keyboard navigation', 'Focus management', 'ARIA'] },
  backend: { label: 'Backend & cloud', items: ['Node.js', 'Express.js', 'Firebase', 'Google Cloud Functions', 'PostgreSQL', 'OAuth 2.0'] },
  delivery: { label: 'Testing & delivery', items: ['Jest', 'Vitest', 'Playwright', 'Git', 'GitHub Actions', 'Docker'] },
  leadership: { label: 'Collaboration', items: ['Technical design', 'Estimation', 'Code reviews', 'Mentoring', 'Agile/Scrum'] }
 },
 experience: [
  { id: 'lht', company: 'LHT Learning', title: 'Lead Full-Stack Engineer', dates: '2019–Nov 2025', location: 'Remote · Westerville, OH', bullets: {
   architecture: 'Led architecture and delivery for enterprise web applications, translating client requirements into reusable components, API integrations, and responsive interfaces.',
   frontend: 'Built React and TypeScript interfaces with reusable UI patterns that supported consistent experiences and maintainable application code.',
   analytics: 'Built an LRS analytics dashboard connecting React and Plotly visualizations with REST APIs, Google Cloud Functions, PostgreSQL, and Microsoft OAuth authentication.',
   vcert: 'Developed the VCERT Training Portal with React, TypeScript, Firebase Authentication, and NoSQL data for personalized progress, challenges, rewards, and notifications.',
   access: 'Implemented WCAG 2.1 AA practices through semantic HTML, keyboard navigation, focus management, accessible forms, and responsive layouts.',
   delivery: 'Partnered with clients, UX, QA, and engineering through requirements, implementation, testing, deployment, and production support; mentored developers and reviewed code.'
  } },
  { id: 'xcelerate', company: 'Xcelerate Media', title: 'Front-End Developer / UI Designer', dates: 'Jun 2014–Mar 2019', location: 'Dublin, OH', bullets: {
   frontend: 'Developed responsive enterprise experiences using JavaScript, HTML5, CSS3, reusable UI components, and REST API integrations.',
   interactive: 'Built custom simulations, branching scenarios, games, and data-driven interactions for enterprise learning audiences.',
   design: 'Translated visual and interaction designs into accessible, cross-browser interfaces in collaboration with designers, developers, and clients.'
  } }
 ],
 project: { title: 'Next.js Portfolio Platform', text: 'Build and maintain a Next.js portfolio using React, TypeScript, reusable components, responsive layouts, and GitHub delivery workflows.' },
 education: 'Bachelor of Science in Computer Science'
} as const;

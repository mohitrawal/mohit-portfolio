/**
 * ALL the words, links and lists on the site live here.
 * Edit this file to make the portfolio yours; no component changes needed.
 */
import type { Skill, Tone, ServiceIcon, MascotMood } from '../components';

export const site = {
  name: 'Mohit Rawal',
  role: 'Full-stack developer',
  email: 'hello@yourdomain.com',
  bookingUrl: '#contact', // e.g. your Calendly link
  resumeUrl: '#',
  socials: [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  ],
};

export const nav = {
  links: [
    { label: 'Work', href: '#work' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ],
  cta: { label: 'Hire me', href: '#contact' },
};

export const hero = {
  status: 'Open for new role and project',
  // The headline is split so one phrase gets the yellow box and one word the wavy underline.
  headline: { before: 'I build web apps that make ', mark: 'clients smile', middle: ' and users ', scribble: 'click', after: '.' },
  intro: "Hi, I'm Mohit, a full-stack developer who turns fuzzy ideas into fast, friendly products. I'm looking for my next full-time role, and I'm also happy to take on freelance projects. React, Node, clean code and clear updates every week. I also use AI tools like Claude, plus RAG and LangGraph, to build and deliver faster.",
  primaryCta: { label: 'See my work', href: '#work' },
  secondaryCta: { label: 'Book a free call', href: '#contact' },
  note: '// replies within 24 hours · IST, works with US + EU hours',
  bubble: 'Psst... I write tests too.',
  mascotMood: 'wave' as MascotMood,
  floatingStickers: [
    { label: 'React', tone: 'sun' as Tone },
    { label: 'Node.js', tone: 'mint' as Tone },
    { label: 'TypeScript', tone: 'tomato' as Tone },
  ],
};

export const skills = {
  label: 'Skills',
  title: 'My toolbox',
  text: 'Every tool I use to ship your project. Hover a key to see how well I know it.',
  terminalTitle: 'mohit@dev: ~/skills',
  groups: [
    { name: 'Frontend', tone: 'sky' as Tone },
    { name: 'Backend', tone: 'mint' as Tone },
    { name: 'Database', tone: 'tomato' as Tone },
    { name: 'AI & Architecture', tone: 'mint' as Tone },
    { name: 'Cloud & DevOps', tone: 'sun' as Tone },
    { name: 'Tools', tone: 'sky' as Tone },
  ],
  list: [
    { name: 'React', group: 'Frontend', level: 'expert', note: 'my daily driver for 4+ years' },
    { name: 'Next.js', group: 'Frontend', level: 'expert', note: 'SSR, app router, edge deploys' },
    { name: 'Vue 3', group: 'Frontend', level: 'advanced', note: 'Composition API and Pinia' },
    { name: 'Vue 2', group: 'Frontend', level: 'advanced', note: 'maintaining and migrating legacy apps' },
    { name: 'Nuxt', group: 'Frontend', level: 'advanced', note: 'SSR and static Vue apps' },
    { name: 'TypeScript', group: 'Frontend', level: 'expert', note: 'strict mode, always' },
    { name: 'Tailwind', group: 'Frontend', level: 'advanced', note: 'fast, consistent UI' },
    { name: 'Material UI', group: 'Frontend', level: 'advanced', note: 'themed, accessible components' },
    { name: 'Node.js', group: 'Backend', level: 'expert', note: 'REST and GraphQL APIs' },
    { name: 'NestJS', group: 'Backend', level: 'advanced', note: 'modular, typed backends' },
    { name: 'PHP', group: 'Backend', level: 'advanced', note: 'server-side apps and APIs' },
    { name: 'Laravel', group: 'Backend', level: 'advanced', note: 'Eloquent, queues, auth' },
    { name: 'MongoDB', group: 'Database', level: 'advanced', note: 'flexible document models' },
    { name: 'PostgreSQL', group: 'Database', level: 'advanced', note: 'schemas that scale' },
    { name: 'SQL', group: 'Database', level: 'advanced', note: 'joins, indexes, query tuning' },
    { name: 'DynamoDB', group: 'Database', level: 'advanced', note: 'serverless NoSQL at scale' },
    { name: 'GenAI', group: 'AI & Architecture', level: 'advanced', note: 'LLM-powered features in real products' },
    { name: 'RAG', group: 'AI & Architecture', level: 'advanced', note: 'chat over your own data with embeddings' },
    { name: 'LangChain', group: 'AI & Architecture', level: 'advanced', note: 'chains, tools and prompt pipelines' },
    { name: 'LangGraph', group: 'AI & Architecture', level: 'advanced', note: 'stateful multi-step AI agents' },
    { name: 'MCP', group: 'AI & Architecture', level: 'advanced', note: 'Model Context Protocol servers and tools' },
    { name: 'AWS', group: 'Cloud & DevOps', level: 'advanced', note: 'Certified Solutions Architect' },
    { name: 'Docker', group: 'Cloud & DevOps', level: 'advanced', note: 'containers for every project' },
    { name: 'Kubernetes', group: 'Cloud & DevOps', level: 'learning', note: 'orchestrating containers' },
    { name: 'Git', group: 'Tools', level: 'expert', note: 'clean history, smooth PRs' },
    { name: 'Stripe', group: 'Tools', level: 'advanced', note: 'subscriptions and checkout' },
    { name: 'Figma', group: 'Tools', level: 'advanced', note: 'I can design, not just build' },
  ] satisfies Skill[],
};

export const services = {
  label: 'Services',
  title: 'What I can do for you',
  text: 'Pick one, or bundle them. Every project gets a fixed quote and a weekly demo.',
  list: [
    { icon: 'code' as ServiceIcon, tone: 'sun' as Tone, title: 'Web apps', description: 'Dashboards, portals and SaaS products, built front to back.', points: ['React + Node + Postgres', 'Auth, payments, admin panels', 'Tested and documented'] },
    { icon: 'rocket' as ServiceIcon, tone: 'tomato' as Tone, title: 'Landing pages', description: 'Fast, good-looking pages that turn visitors into leads.', points: ['Copy-first layouts', 'SEO and analytics set up', 'Live in about two weeks'] },
    { icon: 'bolt' as ServiceIcon, tone: 'mint' as Tone, title: 'Speed & polish', description: 'Make your existing site feel snappy and look sharp.', points: ['Core Web Vitals fixes', 'Accessibility audit', 'UI clean-up'] },
  ],
};

/** SAMPLE projects: replace with your real work. Put screenshots in /public and set `image: '/shot.png'`. */
export const work = {
  label: 'Selected work',
  title: 'Projects I have worked on',
  text: 'A few products I have worked on. Visit the sites to see them live.',
  projects: [
    { file: 'polestarglobal.com/podium', tone: 'sky' as Tone, meta: 'Maritime · Fleet platform', title: 'Podium5', description: 'A maritime platform that tracks ships, fuel use and emissions, with live vessel tracking through onboard communicators (DSAS, Inmarsat-C).', tags: ['Live tracking', 'Fuel & emissions', 'Maritime'], href: 'https://www.polestarglobal.com/podium/', image: undefined as string | undefined },
    { file: 'biglanguage.com/languagevault', tone: 'mint' as Tone, meta: 'Localization · Workflow platform', title: 'LanguageVault', description: 'A translation platform that connects companies with language vendors and runs the whole job from request to delivery, including billing.', tags: ['Vendor management', 'Workflow', 'Billing'], href: 'https://biglanguage.com/technology/languagevault/', image: undefined },
    { file: 'agmatix.com', tone: 'sun' as Tone, meta: 'AgTech · Data platform', title: 'Agmatix', description: 'An agriculture data platform that helps growers and agronomy teams review their field data and turn it into decisions.', tags: ['AgTech', 'Data platform', 'Farming'], href: 'https://www.agmatix.com/', image: undefined },
  ],
};

export const process = {
  label: 'Process',
  title: "How we'll work together",
  steps: [
    { title: 'Chat', text: 'A free 30-minute call about your goals, users and budget.' },
    { title: 'Plan', text: 'A short written plan, timeline and fixed quote. No surprises.' },
    { title: 'Build', text: 'Weekly demos you can click. Feedback goes straight in.' },
    { title: 'Launch', text: 'I ship it, hand over the code and stick around for fixes.' },
  ],
};

export const contact = {
  title: "Got a project? Let's make it fun.",
  subtitle: 'Tell me what you are building. You will get a clear plan and a fixed quote within 48 hours.',
  buttonLabel: 'Start a project',
};

export const footer = {
  text: 'built with React and too many doodles',
};

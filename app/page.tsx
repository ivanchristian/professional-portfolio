'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  Moon,
  Sun,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Briefcase,
  Code2,
  Laptop,
  Globe2,
  Clock3,
  Users,
  Download,
  Layers3,
  Server,
  Workflow,
  Rocket,
  Building2,
  BadgeCheck,
  Target,
  Handshake,
  Monitor,
} from 'lucide-react';
import { motion } from 'framer-motion';

type ShowcaseImage = {
  title: string;
  image: string;
  alt: string;
};

type MobileShowcaseProject = {
  key: string;
  label: string;
  title: string;
  description: string;
  images: ShowcaseImage[];
};

type Project = {
  title: string;
  description: string;
  href: string;
  type: string;
};

type Experience = {
  company: string;
  role: string;
  period: string;
  points: string[];
};

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

type LivePreview = {
  title: string;
  url: string;
  description: string;
};

type CompanyLogo = {
  name: string;
  image: string;
};

const mobileShowcaseProjects: MobileShowcaseProject[] = [
  {
    key: 'grab-health',
    label: 'Grab Health',
    title: 'Grab Health by Good Doctor',
    description: 'Selected mobile interface showcase from the Grab Health by Good Doctor project.',
    images: [
      { title: 'Grab Health Preview 1', image: '/grab1.jpeg', alt: 'Grab Health mobile preview 1' },
      { title: 'Grab Health Preview 2', image: '/grab2.jpeg', alt: 'Grab Health mobile preview 2' },
      { title: 'Grab Health Preview 3', image: '/grab3.jpeg', alt: 'Grab Health mobile preview 3' },
      { title: 'Grab Health Preview 4', image: '/grab4.jpeg', alt: 'Grab Health mobile preview 4' },
      { title: 'Grab Health Preview 5', image: '/grab5.jpeg', alt: 'Grab Health mobile preview 5' },
      { title: 'Grab Health Preview 6', image: '/grab6.jpeg', alt: 'Grab Health mobile preview 6' },
    ],
  },
  {
    key: 'kkuljaem',
    label: 'Kkuljaem App',
    title: 'Kkuljaem App Mobile',
    description: 'Selected mobile interface showcase from the Kkuljaem App product.',
    images: [
      { title: 'Kkuljaem App Mobile Preview 1', image: '/1.png', alt: 'Kkuljaem mobile app preview 1' },
      { title: 'Kkuljaem App Mobile Preview 2', image: '/2.png', alt: 'Kkuljaem mobile app preview 2' },
      { title: 'Kkuljaem App Mobile Preview 3', image: '/3.png', alt: 'Kkuljaem mobile app preview 3' },
      { title: 'Kkuljaem App Mobile Preview 4', image: '/4.png', alt: 'Kkuljaem mobile app preview 4' },
      { title: 'Kkuljaem App Mobile Preview 5', image: '/5.png', alt: 'Kkuljaem mobile app preview 5' },
      { title: 'Kkuljaem App Mobile Preview 6', image: '/6.png', alt: 'Kkuljaem mobile app preview 6' },
      { title: 'Kkuljaem App Mobile Preview 7', image: '/7.png', alt: 'Kkuljaem mobile app preview 7' },
      { title: 'Kkuljaem App Mobile Preview 8', image: '/8.png', alt: 'Kkuljaem mobile app preview 8' },
      { title: 'Kkuljaem App Mobile Preview 9', image: '/9.png', alt: 'Kkuljaem mobile app preview 9' },
    ],
  },
];

const projects: Project[] = [
  {
    title: 'Kkuljaem App (iOS)',
    description: 'Language learning mobile app published on the Apple App Store.',
    href: 'https://apps.apple.com/id/app/kkuljaem/id1586145527',
    type: 'Mobile App',
  },
  {
    title: 'Kkuljaem App (Play Store)',
    description: 'Android version of the Kkuljaem mobile app for students and learners.',
    href: 'https://play.google.com/store/apps/dev?id=5625881168223483476',
    type: 'Mobile App',
  },
  {
    title: 'Kkuljaem App Webapp',
    description: 'Web-based product experience built for the Kkuljaem ecosystem.',
    href: 'https://kkuljaemapp.com/',
    type: 'Web App',
  },
  {
    title: 'Kkuljaem Education',
    description: 'Company website for educational services, programs, and enrollment flow.',
    href: 'https://www.kkuljaemeducation.com/',
    type: 'Website',
  },
  {
    title: 'Kkuljaem Korean',
    description: 'Dedicated website for Korean language learning and related offerings.',
    href: 'https://kkuljaemkorean.com/',
    type: 'Website',
  },
];

const livePreviews: LivePreview[] = [
  {
    title: 'Kkuljaem Education',
    url: 'https://www.kkuljaemeducation.com/',
    description: 'Education-focused website for programs, services, and enrollment flow.',
  },
  {
    title: 'Kkuljaem App Web',
    url: 'https://kkuljaemapp.com/',
    description: 'Web platform experience for the Kkuljaem learning ecosystem.',
  },
  {
    title: 'Kkuljaem Korean',
    url: 'https://kkuljaemkorean.com/',
    description: 'Dedicated website for Korean language learning and offerings.',
  },
];

const companyLogos: CompanyLogo[] = [
  { name: 'BCA', image: '/bca.svg' },
  { name: 'Telkomsel', image: '/telkomsel.png' },
  { name: 'BNI', image: '/bni.png' },
  { name: 'Indosat', image: '/indosat.png' },
  { name: 'Grab', image: '/grab.png' },
  { name: 'Manulife', image: '/manulife.png' },
  { name: 'Phintraco', image: '/phintraco.png' },
  { name: 'Kkuljaem', image: '/kkuljaem.png' },
  { name: 'Good Doctor', image: '/gooddoctor.png' },
];

const experiences: Experience[] = [
  {
    company: 'Manulife Indonesia',
    role: 'Technical Consultant & Full Stack Developer',
    period: 'Nov 2025 — Present',
    points: [
      'Built and maintained an internal AI-powered web platform using Angular 18, Java Spring Boot, and Python.',
      'Designed UI/UX flows and collaborated with global AI and Operations teams.',
      'Implemented CI/CD automation using Jenkins to improve delivery speed and reliability.',
    ],
  },
  {
    company: 'PT Kkuljaem Edu Jaya Indo',
    role: 'IT Technical Lead & Full Stack Developer',
    period: 'Jul 2024 — Oct 2025',
    points: [
      'Led product and engineering delivery across web and mobile initiatives.',
      'Built and maintained full-stack products using React, React Native, Express.js, and MySQL.',
      'Handled infrastructure, deployment, and operational improvements for scalable delivery.',
    ],
  },
  {
    company: 'Phintraco Consulting',
    role: 'IT Consultant & Full Stack Developer',
    period: 'Jun 2021 — Jul 2024',
    points: [
      'Developed enterprise backend services and integrations using Java Spring Boot.',
      'Built frontend applications with React.js, Next.js, and AngularJS across multiple clients.',
      'Improved dashboards, CMS platforms, and SQL-based systems for enterprise use cases.',
    ],
  },
];

const skills: string[] = [
  'React.js',
  'Next.js',
  'React Native',
  'Angular',
  'Java Spring Boot',
  'Node.js',
  'Express.js',
  'TypeScript',
  'JavaScript',
  'Python',
  'MySQL',
  'PostgreSQL',
  'Oracle',
  'REST API',
  'CI/CD',
  'Jenkins',
  'Azure',
  'VPS Deployment',
  'UI/UX',
];

const services = [
  {
    title: 'Full Stack Product Development',
    description: 'Build web applications from frontend experience to backend architecture and deployment.',
    icon: Layers3,
  },
  {
    title: 'Backend API & System Design',
    description: 'Design scalable APIs, integrations, data flows, and production-ready backend services.',
    icon: Server,
  },
  {
    title: 'Technical Leadership',
    description: 'Lead delivery, coordinate teams, improve execution, and translate product goals into shipped software.',
    icon: Users,
  },
  {
    title: 'Deployment & Delivery Workflow',
    description: 'Improve CI/CD, release processes, infrastructure setup, and deployment reliability.',
    icon: Workflow,
  },
];

const workWithMe = [
  'Remote full-time opportunities with international teams',
  'Part-time engineering support for startups and growing products',
  'Contract-based product builds, system improvements, and technical consulting',
  'Cross-functional collaboration across APAC, EU, and partial US time overlap',
];

const impactItems = [
  {
    title: 'Technical leadership across products',
    description: 'Led engineering delivery across web and mobile initiatives, balancing execution, collaboration, and product quality.',
    icon: Target,
  },
  {
    title: 'Production-ready systems and workflows',
    description: 'Built scalable applications, backend services, and deployment workflows designed for real-world use and maintainability.',
    icon: BadgeCheck,
  },
  {
    title: 'Enterprise and startup exposure',
    description: 'Worked across startup products and consulting engagements, contributing to systems used in education, telecom, finance, and insurance.',
    icon: Handshake,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: 'easeOut' as const,
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="max-w-3xl space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-500">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {description ? <p className="text-sm leading-7 text-neutral-600 dark:text-neutral-300 sm:text-base">{description}</p> : null}
    </div>
  );
}

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
      {children}
    </motion.div>
  );
}

function ThemeButton({ darkMode, onClick }: { darkMode: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-800 transition hover:-translate-y-0.5 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
      aria-label="Toggle theme"
    >
      {darkMode ? <Sun size={16} /> : <Moon size={16} />}
      {darkMode ? 'Light' : 'Dark'}
    </button>
  );
}

export default function IvanPortfolioWebsite() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeMobileProject, setActiveMobileProject] = useState('grab-health');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      setDarkMode(true);
    } else if (savedTheme === 'light') {
      setDarkMode(false);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    setCurrentSlide(0);
  }, [activeMobileProject]);

  const activeShowcaseProject = useMemo(() => {
    return mobileShowcaseProjects.find((project) => project.key === activeMobileProject) ?? mobileShowcaseProjects[0];
  }, [activeMobileProject]);

  const activeShowcaseImages = activeShowcaseProject.images;

  const currentShowcase = useMemo(() => {
    return activeShowcaseImages[currentSlide];
  }, [activeShowcaseImages, currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % activeShowcaseImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? activeShowcaseImages.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 transition-colors duration-300 dark:bg-neutral-950 dark:text-white">
      <div className="mx-auto max-w-7xl px-6 py-6 sm:px-8 lg:px-10">
        <motion.header
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="sticky top-0 z-30 mb-10 rounded-3xl border border-neutral-200/70 bg-white/85 px-5 py-4 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/80"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-lg font-semibold uppercase tracking-[0.25em] text-orange-500">Ivan Christian</p>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">Tech Lead · Full Stack Developer · IT Consultant</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/ivanchristian"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5 dark:border-neutral-700"
              >
                <Github size={16} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/ivanchristian15/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5 dark:border-neutral-700"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>

              <a
                href="/Ivan_Christian_Resume_2026.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5 dark:border-neutral-700"
              >
                <Download size={16} />
                Resume
              </a>

              <ThemeButton darkMode={darkMode} onClick={() => setDarkMode((prev) => !prev)} />
            </div>
          </div>
        </motion.header>

        <main className="space-y-24 pb-24">
          <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <motion.div className="space-y-6" initial="hidden" animate="show" variants={stagger}>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                <div className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700 dark:border-orange-500/30 dark:bg-orange-500/10 dark:text-orange-300">
                  Available for software engineering and technical leadership opportunities
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">
                  <Globe2 size={16} />
                  Open to remote full-time, part-time, and contract opportunities with international teams
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-4">
                <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">I build practical, scalable digital products that companies can trust.</h1>
                <p className="max-w-2xl text-base leading-8 text-neutral-600 dark:text-neutral-300 sm:text-lg">
                  Full stack developer and technical lead based in Indonesia with experience across web, mobile, backend systems, DevOps, and product delivery. I help companies turn ideas into reliable software that is clean, usable, and
                  ready to grow.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 dark:border-neutral-800 dark:bg-neutral-900">
                  <div className="mb-2 inline-flex rounded-xl bg-orange-100 p-2 text-orange-600 dark:bg-orange-500/10 dark:text-orange-300">
                    <Laptop size={18} />
                  </div>
                  <p className="text-sm font-semibold">Remote-friendly</p>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">Open to remote and distributed teams.</p>
                </div>

                <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 dark:border-neutral-800 dark:bg-neutral-900">
                  <div className="mb-2 inline-flex rounded-xl bg-orange-100 p-2 text-orange-600 dark:bg-orange-500/10 dark:text-orange-300">
                    <Clock3 size={18} />
                  </div>
                  <p className="text-sm font-semibold">UTC+7 timezone</p>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">Based in Jakarta, Indonesia.</p>
                </div>

                <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 dark:border-neutral-800 dark:bg-neutral-900">
                  <div className="mb-2 inline-flex rounded-xl bg-orange-100 p-2 text-orange-600 dark:bg-orange-500/10 dark:text-orange-300">
                    <Users size={18} />
                  </div>
                  <p className="text-sm font-semibold">Global collaboration</p>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">Comfortable with APAC, EU, and partial US overlap.</p>
                </div>

                <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 dark:border-neutral-800 dark:bg-neutral-900">
                  <div className="mb-2 inline-flex rounded-xl bg-orange-100 p-2 text-orange-600 dark:bg-orange-500/10 dark:text-orange-300">
                    <Code2 size={18} />
                  </div>
                  <p className="text-sm font-semibold">End-to-end ownership</p>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">Frontend, backend, mobile, DevOps, and launch.</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="rounded-[28px] border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700 dark:bg-orange-500/10 dark:text-orange-300">
                      <Building2 size={14} />
                      Currently open to
                    </div>
                    <p className="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
                      Remote full-time roles, part-time support, and contract engagements with international teams. Strong fit for product engineering, technical leadership, system design, and delivery-focused work.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs font-semibold text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">Remote Full-Time</span>
                    <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs font-semibold text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">Part-Time</span>
                    <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs font-semibold text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">Contract</span>
                    <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs font-semibold text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">International Teams</span>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                <a href="mailto:ivan15christian@gmail.com" className="inline-flex items-center gap-2 rounded-2xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-orange-600">
                  <Mail size={16} />
                  Contact Me
                </a>

                <a
                  href="/Ivan_Christian_Resume_2026.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-neutral-300 px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 dark:border-neutral-700"
                >
                  <Download size={16} />
                  View Resume
                </a>

                <a href="#projects" className="rounded-2xl border border-neutral-300 px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 dark:border-neutral-700">
                  View Projects
                </a>

                <a href="#experience" className="rounded-2xl border border-neutral-300 px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 dark:border-neutral-700">
                  View Experience
                </a>
              </motion.div>
            </motion.div>

            <Reveal>
              <div className="rounded-[32px] border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="rounded-2xl bg-neutral-50 p-4 dark:bg-neutral-800/70">
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Location</p>
                    <p className="mt-2 font-semibold">Jakarta, Indonesia</p>
                  </div>

                  <div className="rounded-2xl bg-neutral-50 p-4 dark:bg-neutral-800/70">
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Timezone</p>
                    <p className="mt-2 font-semibold">UTC+7</p>
                  </div>

                  <div className="rounded-2xl bg-neutral-50 p-4 dark:bg-neutral-800/70">
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Collaboration hours</p>
                    <p className="mt-2 font-semibold">APAC / EU / partial US overlap</p>
                  </div>

                  <div className="rounded-2xl bg-neutral-50 p-4 dark:bg-neutral-800/70">
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Work preference</p>
                    <p className="mt-2 font-semibold">Remote / Part-time / Contract / Hybrid</p>
                  </div>

                  <div className="rounded-2xl bg-neutral-50 p-4 dark:bg-neutral-800/70 sm:col-span-2">
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Email</p>
                    <a href="mailto:ivan15christian@gmail.com" className="mt-2 block break-all font-semibold hover:underline">
                      ivan15christian@gmail.com
                    </a>
                  </div>

                  <div className="rounded-2xl bg-neutral-50 p-4 dark:bg-neutral-800/70 sm:col-span-2">
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Profiles</p>
                    <div className="mt-2 flex items-center gap-3">
                      <a href="https://github.com/ivanchristian" target="_blank" rel="noreferrer" className="hover:text-orange-500">
                        <Github size={18} />
                      </a>
                      <a href="https://www.linkedin.com/in/ivanchristian15/" target="_blank" rel="noreferrer" className="hover:text-orange-500">
                        <Linkedin size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          <Reveal>
            <section className="grid gap-6 md:grid-cols-3">
              <div className="rounded-[28px] border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 dark:border-neutral-800 dark:bg-neutral-900">
                <div className="mb-4 inline-flex rounded-2xl bg-orange-100 p-3 text-orange-600 dark:bg-orange-500/10 dark:text-orange-300">
                  <Briefcase size={20} />
                </div>
                <h3 className="text-xl font-semibold">Business-focused delivery</h3>
                <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-300">I build software that is not just functional, but aligned with what teams actually need to ship and maintain.</p>
              </div>

              <div className="rounded-[28px] border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 dark:border-neutral-800 dark:bg-neutral-900">
                <div className="mb-4 inline-flex rounded-2xl bg-orange-100 p-3 text-orange-600 dark:bg-orange-500/10 dark:text-orange-300">
                  <Code2 size={20} />
                </div>
                <h3 className="text-xl font-semibold">Strong full-stack range</h3>
                <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-300">From frontend experience to backend architecture and deployment, I can own delivery end to end.</p>
              </div>

              <div className="rounded-[28px] border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 dark:border-neutral-800 dark:bg-neutral-900">
                <div className="mb-4 inline-flex rounded-2xl bg-orange-100 p-3 text-orange-600 dark:bg-orange-500/10 dark:text-orange-300">
                  <Smartphone size={20} />
                </div>
                <h3 className="text-xl font-semibold">Mobile and web product experience</h3>
                <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-300">I have worked on mobile apps, web applications, company websites, and internal enterprise platforms.</p>
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section className="space-y-8">
              <SectionTitle eyebrow="What I Can Help With" title="How I contribute to products and teams" description="I work best where engineering execution, product clarity, and reliable delivery all matter." />

              <motion.div className="grid gap-5 md:grid-cols-2" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}>
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <motion.div key={service.title} variants={fadeUp} className="rounded-[28px] border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 dark:border-neutral-800 dark:bg-neutral-900">
                      <div className="mb-4 inline-flex rounded-2xl bg-orange-100 p-3 text-orange-600 dark:bg-orange-500/10 dark:text-orange-300">
                        <Icon size={20} />
                      </div>
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                      <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-300">{service.description}</p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </section>
          </Reveal>

          <Reveal>
            <section className="space-y-8">
              <SectionTitle eyebrow="Impact" title="What I focus on delivering" description="Beyond tools and frameworks, I care about outcomes: clarity, reliability, execution, and useful software." />

              <motion.div className="grid gap-5 lg:grid-cols-3" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}>
                {impactItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.div key={item.title} variants={fadeUp} className="rounded-[28px] border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 dark:border-neutral-800 dark:bg-neutral-900">
                      <div className="mb-4 inline-flex rounded-2xl bg-orange-100 p-3 text-orange-600 dark:bg-orange-500/10 dark:text-orange-300">
                        <Icon size={20} />
                      </div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-300">{item.description}</p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </section>
          </Reveal>

          <Reveal>
            <section className="space-y-8">
              <SectionTitle
                eyebrow="Companies I've Worked With"
                title="Experience across startups, consulting, and enterprise-related projects"
                description="A selection of organizations and brands I have supported through engineering, consulting, delivery, and product work."
              />

              <motion.div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}>
                {companyLogos.map((company) => (
                  <motion.div
                    key={company.name}
                    variants={fadeUp}
                    className="group flex min-h-[120px] items-center justify-center rounded-[28px] border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
                    title={company.name}
                  >
                    <img src={company.image} alt={company.name} className="max-h-12 w-auto object-contain opacity-90 transition group-hover:opacity-100 dark:brightness-95 dark:contrast-125" />
                  </motion.div>
                ))}
              </motion.div>
            </section>
          </Reveal>

          <Reveal>
            <section id="projects" className="space-y-8">
              <SectionTitle eyebrow="Featured Projects" title="Selected work I can showcase today" description="These are the public products and company websites that best represent the kind of work I build." />

              <motion.div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}>
                {projects.map((project) => (
                  <motion.a
                    key={project.title}
                    variants={fadeUp}
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-[28px] border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 dark:border-neutral-800 dark:bg-neutral-900"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700 dark:bg-orange-500/10 dark:text-orange-300">{project.type}</span>
                      <ExternalLink size={18} className="text-neutral-400 transition group-hover:text-orange-500" />
                    </div>

                    <h3 className="mt-5 text-xl font-semibold">{project.title}</h3>
                    <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-300">{project.description}</p>

                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-orange-600 dark:text-orange-300">
                      Visit Project <ExternalLink size={14} />
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </section>
          </Reveal>

          <Reveal>
            <section className="space-y-8">
              <SectionTitle eyebrow="Live Product Showcase" title="Real products I have built" description="Live previews of selected public websites. If a browser blocks embedding, you can still open each site directly." />

              <p className="text-sm text-neutral-600 dark:text-neutral-400">Most of my projects are private client projects and cannot be shown publicly. Below are a few selected public projects that I can showcase.</p>

              <motion.div className="grid gap-8 lg:grid-cols-3" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}>
                {livePreviews.map((site) => (
                  <motion.div
                    key={site.title}
                    variants={fadeUp}
                    className="overflow-hidden rounded-[32px] border border-neutral-200 bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900"
                  >
                    <div className="border-b border-neutral-200 px-5 py-4 dark:border-neutral-800">
                      <div className="mb-3 flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-red-400" />
                        <span className="h-3 w-3 rounded-full bg-yellow-400" />
                        <span className="h-3 w-3 rounded-full bg-green-400" />
                      </div>

                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-semibold">{site.title}</h3>
                          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{site.description}</p>
                        </div>

                        <a
                          href={site.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-neutral-300 px-3 py-2 text-xs font-semibold transition hover:-translate-y-0.5 dark:border-neutral-700"
                        >
                          <ExternalLink size={14} />
                          Open Live
                        </a>
                      </div>
                    </div>

                    <div className="relative h-[420px] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                      <iframe src={site.url} title={site.title} className="h-full w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/10 to-transparent p-4 dark:from-black/30">
                        <div className="pointer-events-auto flex justify-end">
                          <a
                            href={site.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-semibold text-neutral-900 shadow-sm backdrop-blur transition hover:bg-white dark:bg-neutral-900/90 dark:text-white dark:hover:bg-neutral-900"
                          >
                            <Monitor size={14} />
                            Open in New Tab
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </section>
          </Reveal>

          <Reveal>
            <section className="space-y-8">
              <SectionTitle eyebrow="Mobile Project Showcase" title="Selected mobile app work" description="These two are the public mobile projects that I can show" />

              <div className="flex flex-wrap gap-3">
                {mobileShowcaseProjects.map((project) => {
                  const isActive = activeMobileProject === project.key;
                  return (
                    <button
                      key={project.key}
                      type="button"
                      onClick={() => setActiveMobileProject(project.key)}
                      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                        isActive ? 'border-orange-500 bg-orange-500 text-white' : 'border-neutral-300 bg-white text-neutral-800 hover:-translate-y-0.5 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white'
                      }`}
                    >
                      <Smartphone size={16} />
                      {project.label}
                    </button>
                  );
                })}
              </div>

              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div className="space-y-4">
                  <div className="rounded-[28px] border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Selected project</p>
                    <h3 className="mt-2 text-2xl font-semibold">{activeShowcaseProject.title}</h3>
                    <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-300">{activeShowcaseProject.description}</p>

                    <div className="mt-6 rounded-2xl bg-neutral-50 p-4 dark:bg-neutral-800/70">
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">Current slide</p>
                      <p className="mt-2 text-base font-semibold">{currentShowcase.title}</p>
                    </div>

                    <div className="mt-6 flex items-center gap-3">
                      <button onClick={prevSlide} type="button" className="rounded-2xl border border-neutral-300 p-3 transition hover:-translate-y-0.5 dark:border-neutral-700" aria-label="Previous slide">
                        <ChevronLeft size={18} />
                      </button>

                      <button onClick={nextSlide} type="button" className="rounded-2xl border border-neutral-300 p-3 transition hover:-translate-y-0.5 dark:border-neutral-700" aria-label="Next slide">
                        <ChevronRight size={18} />
                      </button>

                      <div className="ml-2 flex flex-wrap gap-2">
                        {activeShowcaseImages.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            type="button"
                            className={`h-2.5 rounded-full transition-all ${currentSlide === index ? 'w-8 bg-orange-500' : 'w-2.5 bg-neutral-300 dark:bg-neutral-700'}`}
                            aria-label={`Go to slide ${index + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <motion.div key={`${activeMobileProject}-${currentShowcase.image}`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28, ease: 'easeOut' }} className="flex justify-center">
                  <div className="rounded-[40px] border border-neutral-200 bg-white p-4 shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
                    <div className="mx-auto w-[260px] overflow-hidden rounded-[32px] border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-800 sm:w-[320px]">
                      <img src={currentShowcase.image} alt={currentShowcase.alt} className="h-auto w-full object-cover" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section id="experience" className="space-y-8">
              <SectionTitle eyebrow="Experience" title="Professional background" description="My experience spans enterprise consulting, internal platform development, technical leadership, and product delivery." />

              <motion.div className="space-y-6" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}>
                {experiences.map((item) => (
                  <motion.div key={item.company} variants={fadeUp} className="rounded-[28px] border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 sm:p-8">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold">{item.role}</h3>
                        <p className="mt-1 text-neutral-600 dark:text-neutral-300">{item.company}</p>
                      </div>

                      <div className="rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">{item.period}</div>
                    </div>

                    <ul className="mt-6 space-y-3">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-3 leading-7 text-neutral-700 dark:text-neutral-300">
                          <span className="mt-3 h-2 w-2 rounded-full bg-orange-500" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </section>
          </Reveal>

          <Reveal>
            <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[28px] border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 sm:p-8">
                <SectionTitle eyebrow="Education" title="Academic background" description="Formal education that supports my work in software engineering and product development." />

                <div className="mt-6 space-y-5">
                  <div className="rounded-2xl bg-neutral-50 p-5 dark:bg-neutral-800/60">
                    <h3 className="text-lg font-semibold">Bachelor of Computer Science</h3>
                    <p className="mt-1 text-neutral-600 dark:text-neutral-300">Universitas Bina Nusantara</p>
                    <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">Graduated January 2022</p>
                  </div>

                  <div className="rounded-2xl bg-neutral-50 p-5 dark:bg-neutral-800/60">
                    <h3 className="text-lg font-semibold">SMAK 3 Penabur</h3>
                    <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">Graduated January 2018</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 sm:p-8">
                <SectionTitle eyebrow="Skills" title="Core stack" description="A practical mix of frontend, backend, mobile, DevOps, and deployment experience." />

                <div className="mt-6 flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section className="rounded-[32px] bg-neutral-900 px-6 py-12 text-white shadow-sm dark:bg-orange-500 sm:px-10">
              <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-300 dark:text-orange-100">Work With Me</p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Open to remote, part-time, contract, and international opportunities</h2>
                  <p className="mt-4 max-w-2xl leading-7 text-neutral-300 dark:text-orange-50/90">
                    Based in Jakarta, Indonesia (UTC+7), I am comfortable collaborating across APAC, EU, and partial US hours for product engineering, technical leadership, and full stack delivery.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {workWithMe.map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/5 p-4">
                        <Rocket size={18} className="mt-0.5 shrink-0" />
                        <p className="text-sm leading-6 text-white/90">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3 lg:items-end">
                  <a href="mailto:ivan15christian@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:-translate-y-0.5">
                    <Mail size={16} />
                    Send Email
                  </a>

                  <a
                    href="/Ivan_Christian_Resume_2026.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    <Download size={16} />
                    Open Resume
                  </a>

                  <a
                    href="https://www.linkedin.com/in/ivanchristian15/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    <Linkedin size={16} />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section className="border-t border-neutral-200 pt-8 dark:border-neutral-800">
              <div className="flex flex-col gap-3 text-sm text-neutral-500 dark:text-neutral-400 md:flex-row md:items-center md:justify-between">
                <p>© 2026 Ivan Christian. Built for professional opportunities.</p>

                <div className="flex items-center gap-4">
                  <a href="https://github.com/ivanchristian" target="_blank" rel="noreferrer" className="hover:text-orange-500">
                    GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/ivanchristian15/" target="_blank" rel="noreferrer" className="hover:text-orange-500">
                    LinkedIn
                  </a>
                  <a href="/Ivan_Christian_Resume_2026.pdf" target="_blank" rel="noreferrer" className="hover:text-orange-500">
                    Resume
                  </a>
                  <a href="mailto:ivan15christian@gmail.com" className="hover:text-orange-500">
                    Email
                  </a>
                </div>
              </div>
            </section>
          </Reveal>
        </main>
      </div>
    </div>
  );
}

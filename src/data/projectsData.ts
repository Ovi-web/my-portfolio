import type { Project } from '../types'

export const projectsData: Project[] = [
  {
    id: 'bazardor',
    title: 'বাজার দর (BazarDor)',
    subtitle: 'Commodity Price Tracker',
    image:
      'https://raw.githubusercontent.com/Ovi-web/assignment-7/main/public/screencapture-assignment-7-bazarapp-vercel-app-2026-10-11-21_14_25.png',
    tech: [
      'Next.js (App Router)',
      'React',
      'Tailwind CSS',
      'DaisyUI',
      'BetterAuth',
      'React Hot Toast',
    ],
    description:
      'A modern web platform tracking and comparing daily commodity prices across local markets.',
    highlights: [
      'Animated price marquee ticker',
      'Bengali numeral-aware sorting',
      'Protected analytics page (/product/[slug])',
      'BetterAuth credential and social authentication',
    ],
    github: 'https://github.com/Ovi-web/assignment-7',
    live: 'https://assignment-7-bazarapp.vercel.app',
    challenges:
      'Building custom sorting algorithms that parse Bengali numerals accurately and synchronizing filters across server components.',
    future:
      'Add crowdsourced market price submissions and historical price trend line charts.',
  },
  {
    id: 'fitlog',
    title: 'FitLog',
    subtitle: 'Fitness & Workout Planner',
    image:
      'https://raw.githubusercontent.com/Ovi-web/assignment-fitlog/main/src/assets/screencapture-assignment-fitlog-omega-vercel-app-2026-10-05-00_44_42.png',
    tech: [
      'Next.js (App Router)',
      'React',
      'Tailwind CSS',
      'React Toastify',
      'LocalStorage API',
    ],
    description:
      'A dark-themed gym web app for structuring daily training plans with precise tracking.',
    highlights: [
      'Curated workout library',
      'Smart daily planner with a 5-lift cap',
      'Live calorie and time calculation',
      'Persistent local storage',
    ],
    github: 'https://github.com/Ovi-web/assignment-fitlog',
    live: 'https://assignment-fitlog-omega.vercel.app/',
    challenges:
      'Maintaining synchronous local state validation for the five-lift cap across category switches without hydration mismatches.',
    future:
      'Add cloud synchronization, custom workout builders, and progression analytics.',
  },
  {
    id: 'dev-stack',
    title: 'Dev Stack',
    subtitle: 'Developer Tool Comparator',
    image:
      'https://raw.githubusercontent.com/Ovi-web/assignment-5/main/src/assets/screencapture-ovisdevstack-netlify-app-2026-10-05-00_44_21.png',
    tech: ['React (TypeScript)', 'Vite', 'Tailwind CSS', 'React Toastify'],
    description:
      'An interactive tooling catalog to explore, compare, and build custom web technology stacks.',
    highlights: [
      'Interactive custom stack builder',
      'Side-by-side framework comparison',
      'Dynamic JSON data loading',
      'Instant toast notifications',
    ],
    github: 'https://github.com/Ovi-web/assignment-5',
    live: 'https://ovisdevstack.netlify.app/',
    challenges:
      'Designing an extensible TypeScript data model for polymorphic technology specifications.',
    future:
      'Add exportable boilerplate templates and community upvoting.',
  },
]

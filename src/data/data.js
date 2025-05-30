export const projects = [
  {
    id: 1,
    name: 'TaskMate',
    image: '/avatar.png',
    techStack: ['React', 'Firebase', 'Tailwind CSS'],
    description:
      'A task management app with real-time updates, drag-and-drop, and user authentication.',
    liveLink: 'https://taskmate-demo.vercel.app',
    githubLink: 'https://github.com/demo/taskmate',
    slug: 'taskmate',
  },
  {
    id: 2,
    name: 'Foodie Finds',
    image: '/avatar.png',
    techStack: ['Next.js', 'MongoDB', 'ShadCN UI'],
    description:
      'A food discovery platform that helps users find and review dishes from local restaurants.',
    liveLink: 'https://foodiefinds.vercel.app',
    githubLink: 'https://github.com/demo/foodie-finds',
    slug: 'foodie-finds',
  },
  {
    id: 3,
    name: 'LangBuddy',
    image: '/avatar.png',
    techStack: ['React', 'Firebase', 'Framer Motion'],
    description:
      'An interactive language learning app with flashcards, quizzes, and pronunciation practice.',
    liveLink: 'https://langbuddy.vercel.app',
    githubLink: 'https://github.com/demo/langbuddy',
    slug: 'langbuddy',
  },
];

export const skillsData = [
  {
    id: 'frontend',
    category: 'Frontend',
    skills: [
      { id: 'html', name: 'HTML5' },
      { id: 'css', name: 'CSS3' },
      { id: 'js', name: 'JavaScript (ES6+)' },
      { id: 'tailwind', name: 'Tailwind CSS' },
      { id: 'ts', name: 'TypeScript' },
      { id: 'react', name: 'React.js' },
      { id: 'router', name: 'React Router' },
      { id: 'axios', name: 'Axios' },
      { id: 'tanstack', name: 'TanStack Query' },
      { id: 'hook-form', name: 'React Hook Form' },
      { id: 'next', name: 'Next.js' },
    ],
  },
  {
    id: 'backend',
    category: 'Backend',
    skills: [
      { id: 'zod', name: 'Zod' },
      { id: 'bcrypt', name: 'bcrypt.js' },
      { id: 'node', name: 'Node.js' },
      { id: 'express', name: 'Express.js' },
      { id: 'mongodb', name: 'MongoDB' },
      { id: 'mongoose', name: 'Mongoose' },
    ],
  },
  {
    id: 'Tools',
    category: 'Tools',
    skills: [
      { id: 'firebase-auth', name: 'Firebase Authentication' },
      { id: 'jwt-jose', name: 'JWT / jose' },
      { id: 'bcrypt-auth', name: 'bcrypt.js' },
      { id: 'git', name: 'Git & GitHub' },
      { id: 'vercel', name: 'Vercel' },
      { id: 'surge', name: 'Surge' },
      { id: 'netlify', name: 'Netlify' },
      { id: 'vscode', name: 'VS Code' },
      { id: 'postman', name: 'Postman' },
      { id: 'valentina', name: 'Valentina Studio' },
      { id: 'compass', name: 'MongoDB Compass' },
      { id: 'psql', name: 'SQL Shell (psql)' },
    ],
  },
];

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
      { id: 'html', name: 'HTML5', imgPath: 'html.svg' },
      { id: 'css', name: 'CSS3', imgPath: 'css.svg' },
      { id: 'js', name: 'JavaScript', imgPath: 'javascript.svg' },
      { id: 'tailwind', name: 'Tailwind', imgPath: 'tailwind.svg' },
      { id: 'ts', name: 'TypeScript', imgPath: 'typescript.svg' },
      { id: 'react', name: 'React.js', imgPath: 'react.svg' },
      { id: 'router', name: 'React Router', imgPath: 'react-router.svg' },
      { id: 'axios', name: 'Axios', imgPath: 'axios.svg' },
      { id: 'tanstack', name: 'TanStack Query', imgPath: 'tanstack.png' },
      { id: 'hook-form', name: 'React Hook Form', imgPath: 'form.svg' },
      {
        id: 'firebase',
        name: 'Firebase',
        imgPath: 'firebase.svg',
      },
      { id: 'next', name: 'Next.js', imgPath: 'next.svg' },
    ],
  },
  {
    id: 'backend',
    category: 'Backend',
    skills: [
      { id: 'zod', name: 'Zod', imgPath: 'zod.png' },
      { id: 'jwt-jose', name: 'JWT / jose', imgPath: 'jwt.svg' },
      { id: 'bcrypt-auth', name: 'bcrypt.js', imgPath: 'bcrypt.png' },
      { id: 'node', name: 'Node.js', imgPath: 'node.svg' },
      { id: 'express', name: 'Express.js', imgPath: 'express.svg' },
      { id: 'mongodb', name: 'MongoDB', imgPath: 'mongodb.svg' },
      { id: 'mongoose', name: 'Mongoose', imgPath: 'mongoose.svg' },
    ],
  },
  {
    id: 'Tools',
    category: 'Tools',
    skills: [
      { id: 'git', name: 'Git', imgPath: 'git.svg' },
      { id: 'github', name: 'GitHub', imgPath: 'github-light.svg' },
      { id: 'vercel', name: 'Vercel', imgPath: 'vercel.svg' },
      { id: 'surge', name: 'Surge', imgPath: 'surge.svg' },
      { id: 'netlify', name: 'Netlify', imgPath: 'netlify.svg' },
      { id: 'vscode', name: 'VS Code', imgPath: 'vs-code.svg' },
    ],
  },
];

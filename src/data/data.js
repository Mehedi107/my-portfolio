export const skillsData = [
  {
    id: 'frontend',
    category: 'Frontend',
    skills: [
      { id: 'html', name: 'HTML5', img: { src: 'html.svg', alt: 'html.svg' } },
      { id: 'css', name: 'CSS3', img: { src: 'css.svg', alt: 'css.svg' } },
      {
        id: 'js',
        name: 'JavaScript',
        img: { src: 'javascript.svg', alt: 'javascript.svg' },
      },
      {
        id: 'tailwind',
        name: 'Tailwind',
        img: { src: 'tailwind.svg', alt: 'tailwind.svg' },
      },
      {
        id: 'ts',
        name: 'TypeScript',
        img: { src: 'typescript.svg', alt: 'typescript.svg' },
      },
      {
        id: 'react',
        name: 'React.js',
        img: { src: 'react.svg', alt: 'react.svg' },
      },
      {
        id: 'router',
        name: 'React Router',
        img: { src: 'react-router.svg', alt: 'react-router.svg' },
      },
      {
        id: 'axios',
        name: 'Axios',
        img: { src: 'axios.svg', alt: 'axios.svg' },
      },
      {
        id: 'tanstack',
        name: 'TanStack Query',
        img: { src: 'tanstack.png', alt: 'tanstack.png' },
      },
      {
        id: 'hook-form',
        name: 'React Hook Form',
        img: { src: 'form.svg', alt: 'form.svg' },
      },
      {
        id: 'firebase',
        name: 'Firebase',
        img: { src: 'firebase.svg', alt: 'firebase.svg' },
      },
      {
        id: 'next',
        name: 'Next.js',
        img: { src: 'next.svg', alt: 'next.svg' },
      },
    ],
  },
  {
    id: 'backend',
    category: 'Backend',
    skills: [
      { id: 'zod', name: 'Zod', img: { src: 'zod.png', alt: 'zod.png' } },
      {
        id: 'jwt-jose',
        name: 'JWT / jose',
        img: { src: 'jwt.svg', alt: 'jwt.svg' },
      },
      {
        id: 'bcrypt-auth',
        name: 'bcrypt.js',
        img: { src: 'bcrypt.png', alt: 'bcrypt.png' },
      },
      {
        id: 'node',
        name: 'Node.js',
        img: { src: 'node.svg', alt: 'node.svg' },
      },
      {
        id: 'express',
        name: 'Express.js',
        img: { src: 'express.svg', alt: 'express.svg' },
      },
      {
        id: 'mongodb',
        name: 'MongoDB',
        img: { src: 'mongodb.svg', alt: 'mongodb.svg' },
      },
      {
        id: 'mongoose',
        name: 'Mongoose',
        img: { src: 'mongoose.svg', alt: 'mongoose.svg' },
      },
    ],
  },
  {
    id: 'Tools',
    category: 'Tools',
    skills: [
      { id: 'git', name: 'Git', img: { src: 'git.svg', alt: 'git.svg' } },
      {
        id: 'github',
        name: 'GitHub',
        img: { src: 'github-light.svg', alt: 'github-light.svg' },
      },
      {
        id: 'vercel',
        name: 'Vercel',
        img: { src: 'vercel.svg', alt: 'vercel.svg' },
      },
      {
        id: 'surge',
        name: 'Surge',
        img: { src: 'surge.svg', alt: 'surge.svg' },
      },
      {
        id: 'netlify',
        name: 'Netlify',
        img: { src: 'netlify.svg', alt: 'netlify.svg' },
      },
      {
        id: 'vscode',
        name: 'VS Code',
        img: { src: 'vs-code.svg', alt: 'vs-code.svg' },
      },
    ],
  },
];

export const projectsData = {
  categories: ['HTML', 'Tailwind', 'React', 'Next'],
  contents: [
    {
      id: 1,
      img: {
        src: '/tic-tac-toe.webp',
        alt: 'Project Image',
      },
      technology: ['HTML', 'CSS', 'React'],
      title: 'Tic-Tac-Toe',
      description:
        'A simple and interactive Tic-Tac-Toe game built with React. This project demonstrates the fundamentals of React.',
      liveLink: 'https://tic-tac-toe-by-mehedi.vercel.app/',
      githubLink: 'https://github.com/Mehedi107/tic-tac-toe',
    },
    {
      id: 2,
      img: {
        src: '/artifact.webp',
        alt: 'Project Image',
      },
      technology: [
        'Tailwind',
        'React',
        'Node',
        'Express',
        'Mongodb',
        'Firebase',
        'JWT',
      ],
      title: 'Artifact Vault',
      description:
        'Artifact Vault is a web application designed for tracking and showcasing historical artifacts such as the Rosetta Stone and Antikythera Mechanism.',
      liveLink: 'https://artifact-vault-916d6.web.app/',
      githubLink: 'https://github.com/Mehedi107/A11-client',
    },
    {
      id: 3,
      img: {
        src: '/prodvent.webp',
        alt: 'Project Image',
      },
      technology: [
        'Tailwind',
        'React',
        'Node',
        'Express',
        'Mongodb',
        'Firebase',
        'JWT',
        'Stripe',
      ],
      title: 'ProdVent',
      description:
        'ProdVent is a web platform designed to showcase and discover the latest digital products, including web apps, AI tools, software, games, and mobile apps.',
      liveLink: 'https://prodvent-5cd36.web.app/',
      githubLink: 'https://github.com/Mehedi107/A12-client',
    },
  ],
};

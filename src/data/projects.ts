export type Project = {
  title: string
  description: string
  techs: string[]
  link: string
  prize?: string
  isComingSoon?: boolean
}

const projects: Project[] = [
  {
    title: 'Harmony Dapp Template',
    description:
      'Hackaton project: All-in-one forkable Harmony dev stack to build your dapp',
    techs: ['React', 'TypeScript', 'Docker', 'Ethers', 'Solidity', 'Hardhat'],
    link: 'https://github.com/jotagep/harmony-dapp-template',
    prize: '5000$',
  },
  {
    title: 'VerFlix',
    description:
      'A Netflix clone built with Next, Redux and Redis to cache data that allows you to discover popular movies using TMDB API.',
    techs: [
      'Next',
      'Typescript',
      'Jest',
      'Redux',
      'Storybook',
      'Playwright',
      'Tailwind',
      'Redis',
    ],
    link: 'https://github.com/jotagep/next-redis-movies-app',
  },
  {
    title: 'Jotagep portfolio',
    description: 'Personal portfolio built with Astro',
    techs: ['Astro', 'TypeScript', 'Tailwind', 'MDX'],
    link: 'https://github.com/jotagep/jotagep.com',
  },
]

export default projects

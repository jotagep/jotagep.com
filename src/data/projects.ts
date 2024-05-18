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
    title: 'VerFlix',
    description:
      'A Netflix clone built with Next, Redux and Redis to cache data that allows you to discover popular movies using TMDB API.',
    techs: ['Next', 'Typescript', 'Redux', 'Tailwind', 'Redis'],
    link: 'https://github.com/jotagep/next-redis-movies-app',
  },
  {
    title: 'Harmony Dapp Template',
    description:
      'Hackaton project: All-in-one forkable Harmony dev stack to build your dapp',
    techs: ['React', 'TypeScript', 'Ethers', 'Solidity', 'Hardhat'],
    link: 'https://github.com/jotagep/harmony-dapp-template',
    prize: '5000$',
  },
  {
    title: 'Jotagep portfolio',
    description: 'My personal portfolio built with Astro',
    techs: ['Astro', 'TypeScript'],
    link: 'https://github.com/jotagep/jotagep.com',
  },
]

export default projects

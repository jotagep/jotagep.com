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
    title: 'Football Genius ⚽',
    description:
      'The ultimate daily football trivia platform. Play ten engaging modes: Football Imposter, Football Grid, Guess the Player, Football Wordle, Swipe, Career, Ranking, Football Draft, Guess The Club and Penalty Shootout. Compete daily and track your performance with detailed statistics.',
    techs: ['Cloudflare', 'Astro', 'Hono'],
    link: 'https://footballgenius.app/',
  },
  {
    title: 'Battleship Multiplayer Game',
    description:
      'Real-time Battleship built for fast, lightweight, globally distributed multiplayer play. It features a Hono API on Cloudflare Workers and PartyKit for real-time state sync, all managed in a Turborepo monorepo.',
    techs: [
      'Partykit',
      'Cloudflare Workers',
      'Hono',
      'Next.js',
      'Turborepo',
      'Bun',
    ],
    link: 'https://github.com/jotagep/battleship-partykit',
  },
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
]

export default projects

import { defaultLang, type Language } from '@/i18n/ui'

export type Project = {
  title: string
  description: string
  techs: string[]
  link: string
  prize?: string
  isComingSoon?: boolean
}

type LocalizedProject = Omit<Project, 'description'> & {
  description: Record<Language, string>
}

const localizedProjects: LocalizedProject[] = [
  {
    title: 'Football Genius ⚽',
    description: {
      en: 'The ultimate daily football trivia platform. Play ten engaging modes: Football Imposter, Football Grid, Guess the Player, Football Wordle, Swipe, Career, Ranking, Football Draft, Guess The Club and Penalty Shootout. Compete daily and track your performance with detailed statistics.',
      es: 'La plataforma definitiva de trivia diaria de fútbol. Juega a diez modos distintos: Football Imposter, Football Grid, Guess the Player, Football Wordle, Swipe, Career, Ranking, Football Draft, Guess The Club y Penalty Shootout. Compite a diario y sigue tu rendimiento con estadísticas detalladas.',
    },
    techs: ['Cloudflare', 'Astro', 'Hono'],
    link: 'https://footballgenius.app/',
  },
  {
    title: 'Battleship Multiplayer Game',
    description: {
      en: 'Real-time Battleship built for fast, lightweight, globally distributed multiplayer play. It features a Hono API on Cloudflare Workers and PartyKit for real-time state sync, all managed in a Turborepo monorepo.',
      es: 'Hundir la flota en tiempo real diseñado para partidas multijugador rápidas, ligeras y distribuidas globalmente. Cuenta con una API en Hono sobre Cloudflare Workers y PartyKit para sincronización de estado en tiempo real, gestionado en un monorepo con Turborepo.',
    },
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
    description: {
      en: 'Hackathon project: All-in-one forkable Harmony dev stack to build your dapp.',
      es: 'Proyecto ganador de hackathon: stack de desarrollo todo en uno listo para clonar y construir tu dApp en Harmony.',
    },
    techs: ['React', 'TypeScript', 'Docker', 'Ethers', 'Solidity', 'Hardhat'],
    link: 'https://github.com/jotagep/harmony-dapp-template',
    prize: '5000$',
  },
  {
    title: 'VerFlix',
    description: {
      en: 'A Netflix clone built with Next, Redux and Redis to cache data that allows you to discover popular movies using TMDB API.',
      es: 'Clon de Netflix construido con Next.js, Redux y Redis para cachear datos que permite descubrir películas populares usando la API de TMDB.',
    },
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

export const getProjects = (lang: Language = defaultLang): Project[] =>
  localizedProjects.map((project) => ({
    ...project,
    description: project.description[lang] ?? project.description[defaultLang],
  }))

export default getProjects()

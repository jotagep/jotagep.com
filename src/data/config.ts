import type { IconName } from '@/utils/iconPaths'

type Social = {
  label: string
  link: string
  icon: IconName
}

const config = {
  mail: 'jotagepweb@gmail.com',
  siteUrl: 'https://jotagep.com/',
  title: 'Jotagep - Web Developer',
  logoTitle: 'Jotagep',
  description: 'A minimal portfolio template built with Astro and Tailwindcss.',
  postPerPage: 8,
  socials: [
    {
      icon: 'twitter-logo',
      label: 'Twitter',
      link: 'https://twitter.com/jotagep_dev',
    },
    {
      icon: 'linkedin-logo',
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/jotagep/',
    },
    {
      icon: 'github-logo',
      link: 'https://github.com/jotagep',
      label: 'Github',
    },
  ] as Social[],
  twitter: '@jotagep_dev',
}

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  BLOG: '/blog',
  get TAG() {
    return `${this.BLOG}/tag`
  },
} as const

export default config

import type { Language } from '@/i18n/ui'
import { useTranslations } from '@/i18n/utils'

import logoRedpoints from '../assets/jobs/redpoints.png'
import logoSoluble from '../assets/jobs/soluble.png'
import logoSpellborne from '../assets/jobs/spellborne.jpg'

type JobStatus = 'full-time' | 'contractor'
type JobColor = 'green' | 'orange' | 'red'

export type Job = {
  title: string
  status: JobStatus
  active?: boolean
  logo: ImageMetadata
  company: string
  url?: string
  from: Date
  to?: Date
  extraInfo?: string
}

export const jobs: Job[] = [
  {
    active: true,
    title: 'Full Stack Developer / Blockchain',
    status: 'contractor',
    company: 'Spellborne (MonStudios)',
    logo: logoSpellborne,
    url: 'https://www.spellborne.gg/',
    from: new Date('2022-02-02'),
  },
  {
    active: false,
    title: 'Senior Frontend Developer',
    status: 'full-time',
    company: 'Red Points',
    logo: logoRedpoints,
    url: 'https://www.redpoints.com/',
    from: new Date('2021-01-04'),
    to: new Date('2025-01-01'),
  },
  {
    active: false,
    title: 'Frontend Developer',
    status: 'full-time',
    company: 'Soluble Studio',
    logo: logoSoluble,
    url: 'https://solublestudio.com/',
    from: new Date('2019-01-02'),
    to: new Date('2020-12-19'),
  },
]

export const lastJobs = jobs.sort((a, b) => {
  if (a.to && b.to) return b.to.getTime() - a.to.getTime()
  return b.from.getTime() - a.from.getTime()
})

export const COLOR_BY_STATUS: Record<JobStatus, JobColor> = {
  'full-time': 'green',
  contractor: 'orange',
}

export const getTextByStatus = (lang: Language) => {
  const t = useTranslations(lang)

  return {
    'full-time': t('job.fullTime'),
    contractor: t('job.contractor'),
  }
}

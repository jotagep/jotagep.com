import { defaultLang } from '@/i18n/ui'

import { generateRssResponse } from '@/utils/rss'

export const GET = async () => generateRssResponse(defaultLang)

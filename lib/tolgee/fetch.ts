'use server'

type FetchI18nParams = {
  isCdn: boolean
  namespace?: string
  language: string
}

export const fetchI18n = async ({
  namespace,
  language,
  isCdn
}: FetchI18nParams): Promise<Record<string, string> | null> => {
  const origin =
    process.env.VERCEL_ENV === 'production'
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL || ''}`
      : process.env.VERCEL_ENV === 'preview'
      ? `https://${process.env.VERCEL_BRANCH_URL}`
      : 'http://localhost:3000'

  const cdn = process.env.TOLGEE_CDN_URL
  const url = isCdn
    ? `${cdn}/${namespace ? `${namespace}/` : ''}${language}.json`
    : `${origin}/i18n/${namespace ? `${namespace}/` : ''}${language}.json`

  const result = await fetch(url, {
    next: {
      revalidate: 3600, // cache for 1 hour
      tags: ['i18n']
    }
  })

  if (!result.ok) {
    return null
  }

  return await result.json()
}

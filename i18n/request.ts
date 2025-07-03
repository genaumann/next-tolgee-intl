import {getRequestConfig} from 'next-intl/server'
import {LOCALES} from '@/lib/tolgee/base'

export default getRequestConfig(async ({requestLocale}) => {
  const locale = await requestLocale

  return {
    locale: locale || LOCALES.de,
    messages: {}
  }
})

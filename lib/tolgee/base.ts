import {DevTools, Tolgee, FormatSimple} from '@tolgee/web'
import {CreateFunctionBackend, fetchTolgee} from './plugin'

export enum LOCALES {
  de = 'de',
  en = 'en'
}

const apiKey = process.env.NEXT_PUBLIC_TOLGEE_API_KEY
const apiUrl = process.env.NEXT_PUBLIC_TOLGEE_API_URL

export function TolgeeBase() {
  return Tolgee()
    .use(FormatSimple()) // Super light formatter, which will enable you to pass variables into translations.
    .use(DevTools()) // automatically omitted in production builds - useful in development
    .use(CreateFunctionBackend({loader: fetchTolgee})) // custom backend loader
    .updateDefaults({
      // add api key and api url
      apiKey,
      apiUrl
    })
}

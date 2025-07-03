import {getTranslate} from '@/lib/tolgee/server'

export default async function ServerPage() {
  const t = await getTranslate('app')
  return <p>{t('server')}</p>
}

import {getTranslate} from '@/lib/tolgee/server'
import Link from 'next/link'

export default async function Home() {
  const t = await getTranslate()
  return (
    <div className="flex flex-col h-full items-center justify-center gap-4">
      <h1 className="text-6xl">{t('welcome')}</h1>
      <Link className="underline text-green-500" href="/app">
        {t('goToApp')}
      </Link>
      <Link className="underline text-green-500" href="/lang">
        {t('switchLang')}
      </Link>
    </div>
  )
}

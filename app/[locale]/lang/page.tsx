import LangSelect from '@/components/lang-switch'
import {LOCALES} from '@/lib/tolgee/base'
import {getTranslate} from '@/lib/tolgee/server'

export default async function LangPage({
  params
}: {
  params: Promise<{locale: LOCALES}>
}) {
  const {locale} = await params
  const t = await getTranslate()
  return (
    <div className="flex flex-col h-full items-center justify-center gap-4">
      <h1 className="text-6xl">{t('currentLang')}</h1>
      <LangSelect locale={locale} />
    </div>
  )
}

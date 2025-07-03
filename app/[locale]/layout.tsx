import {ReactNode} from 'react'
import {notFound} from 'next/navigation'
import {TolgeeNextProvider} from '@/lib/tolgee/client'
import {getTolgee} from '@/lib/tolgee/server'
import {LOCALES} from '@/lib/tolgee/base'
import '@/app/globals.css'

type Props = {
  children: ReactNode
  params: Promise<{locale: LOCALES}>
}

export default async function LocaleLayout({children, params}: Props) {
  const {locale} = await params
  if (!locale || !Object.keys(LOCALES).includes(locale)) {
    notFound()
  }
  const tolgee = await getTolgee()
  const records = await tolgee.loadRequired() // load default common namespace

  return (
    <html lang={locale}>
      <body>
        <TolgeeNextProvider language={locale} staticData={records}>
          {children}
        </TolgeeNextProvider>
      </body>
    </html>
  )
}

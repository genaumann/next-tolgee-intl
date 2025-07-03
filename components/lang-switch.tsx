'use client'

import {ChangeEvent, useTransition} from 'react'
import {useParams} from 'next/navigation'
import {NextIntlClientProvider} from 'next-intl'
import {usePathname, useRouter} from '@/i18n/routing'
import {LOCALES} from '@/lib/tolgee/base'

interface LocaleMap {
  [key: string]: {
    icon: string
    name: string
  }
}

function SelectComponent({locale}: {locale: LOCALES}) {
  const [, startTransition] = useTransition()
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()

  const localeMap: LocaleMap = {
    de: {
      icon: '🇩🇪',
      name: 'Deutsch'
    },
    en: {
      icon: '🇬🇧',
      name: 'English'
    }
  }

  const changeLocale = async (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        {pathname, params},
        {locale: nextLocale}
      )
    })
  }

  return (
    <select onChange={changeLocale} value={locale}>
      {Object.entries(localeMap).map(([key, {icon, name}]) => (
        <option key={key} value={key}>
          {icon} {name}
        </option>
      ))}
    </select>
  )
}

export default function LangSelect({locale}: {locale: LOCALES}) {
  return (
    <NextIntlClientProvider locale={locale} messages={null}>
      <SelectComponent locale={locale} />
    </NextIntlClientProvider>
  )
}

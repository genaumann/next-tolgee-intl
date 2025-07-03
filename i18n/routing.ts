import {defineRouting} from 'next-intl/routing'
import {createNavigation} from 'next-intl/navigation'
import {LOCALES} from '@/lib/tolgee/base'

export const routing = defineRouting({
  locales: Object.keys(LOCALES),
  defaultLocale: LOCALES.de,
  localePrefix: 'as-needed'
})

export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing)

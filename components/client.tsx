'use client'

import {useTranslate} from '@tolgee/react'

export default function ClientPage() {
  const {t} = useTranslate('app')

  return <p>{t('client')}</p>
}

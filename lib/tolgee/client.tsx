'use client'

import {ReactNode, useEffect} from 'react'
import {
  CachePublicRecord,
  TolgeeProvider,
  TolgeeStaticData
} from '@tolgee/react'
import {useRouter} from 'next/navigation'
import {TolgeeBase} from './base'

type Props = {
  staticData: TolgeeStaticData | CachePublicRecord[]
  language: string
  children: ReactNode
}

const tolgee = TolgeeBase().init({
  defaultNs: 'common'
})

export const TolgeeNextProvider = ({language, staticData, children}: Props) => {
  const router = useRouter()

  useEffect(() => {
    const {unsubscribe} = tolgee.on('permanentChange', () => {
      router.refresh()
    })
    return () => unsubscribe()
  }, [tolgee, router])

  return (
    <TolgeeProvider tolgee={tolgee} ssr={{language, staticData}}>
      {children}
    </TolgeeProvider>
  )
}

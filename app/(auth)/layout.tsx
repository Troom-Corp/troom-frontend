'use client'

import { useRouter } from 'next/navigation'

import { authStore } from '@/store'
import { observer } from 'mobx-react-lite'
import { useAuth } from '@/hooks'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  
  return <>{children}</>
}

export default observer(AuthLayout)
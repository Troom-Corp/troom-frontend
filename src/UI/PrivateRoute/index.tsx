import { useRouter } from "next/navigation"

import { authStore } from '@/store'

export const PrivateRoute = ({ children }: { children: React.ReactNode}) => {
  const router = useRouter()

  return (
    <>
      {authStore.isAuth ? {children} : router.push('/signin')}
    </>
  )
}
'use client'

import { useEffect } from "react"
import { useRouter } from "next/navigation"

import { authStore } from '@/store'

export const useAuth = (path: string, type?: string) => {
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      await authStore.getProfile()

      if (type === 'auth') {
        if (authStore.isAuth) return router.push(path)
      } else {
        if (!authStore.isAuth) return router.push(path)
      }
    }

    checkAuth()
  }, [authStore.isAuth])
}
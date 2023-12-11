'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import s from './styles.module.scss'
import { authStore } from '@/store'

export const AuthFooter = () => {
  const path = usePathname()
  const data = authStore.data

  
  return (
    <>
      <div className={s.underline}>
        <div className={s.underline__line} />
        <strong>ИЛИ</strong>
        <div className={s.underline__line} />
      </div>
      <div className={s.providers}>

      </div>
      <div className={s.switch}>
        {path === '/signin' ?
          <>
            <p>Ещё нет аккаунта?</p>
            <Link href='/signup'>Создать</Link>
          </>
          :
          <>
            <p>Уже есть аккаунт?</p>
            <Link href='/signin'>Войти</Link>
          </>
        }
      </div>
    </>
  )
}
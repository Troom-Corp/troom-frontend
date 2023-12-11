'use client'

import { observer } from 'mobx-react-lite'

import { AuthData, AuthFooter } from '@/UI'
import { useAuth } from '@/hooks'

import s from './styles.module.scss'

export const SignInForm = observer(() => {
  useAuth('/home', 'auth')

  return (
    <form className={s.form}>
      <div>
        <h1>Войдите в аккаунт</h1>
      </div>
      <div className={s.wrapper}>
        <AuthData type='signin' />
      </div>
      <AuthFooter />
    </form>
  )
})
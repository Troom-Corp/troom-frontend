'use client'

import { observer } from 'mobx-react-lite'

import { AuthData, AuthFooter } from '@/UI'
import authStore from '@/store/AuthStore'
import { useAuth } from '@/hooks'

import s from './styles.module.scss'

export const SignUpForm = observer(() => {

  useAuth('/home', 'auth')

  return (
    <form className={s.form}>
      <div>
        <h1>Создайте аккаунт</h1>
        <p>для полного погружения</p>
      </div>
      <strong>Шаг {!authStore.step ? '1' : '2'} из 2</strong>
      <div className={s.wrapper}>
        <AuthData type={!authStore.step ? 'first-signup' : 'second-signup'} />
      </div>
      <AuthFooter />
    </form>
  )
})
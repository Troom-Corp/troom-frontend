'use client'

import { useContext } from 'react'

import { Context } from '../../app/providers'
import { AuthData, AuthFooter } from '@/components/auth'

import s from './styles.module.scss'
import { observer } from 'mobx-react-lite'

export const SignUpForm = observer(() => {
  const { authStore } = useContext(Context)

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
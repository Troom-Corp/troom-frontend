'use client'

import { observer } from 'mobx-react-lite'
import Link from 'next/link'

import { authStore } from '@/store'
import { AuthInput } from '@/UI'

import s from './styles.module.scss'

interface AuthDataProps {
  type: string
}

export const AuthData: React.FC<AuthDataProps> = observer(({ type }) => {
  const data = authStore.data

  switch (type) {
  case 'signin':
    return (
      <>
        <AuthInput
          type='email'
          placeholder='Логин...'
          value={data.login}
          onChange={(e) => authStore.setData({ login: e.target.value })}
        />
        <AuthInput
          type='password'
          placeholder='Пароль...'
          value={data.password}
          onChange={(e) => authStore.setData({ password: e.target.value })}
        />
        <AuthInput
          type='button'
          value='Войти'
          onClick={() => authStore.signIn(data.login, data.password)}
        />
      </>
    )
    case 'first-signup':
    return (
      <>
        <AuthInput
          type='text'
          placeholder='Логин...'
          value={data.login}
          onChange={(e) => authStore.setData({ login: e.target.value })}
        />
        <AuthInput
          type='text'
          placeholder='Имя...'
          value={data.firstName}
          onChange={(e) => authStore.setData({ firstName: e.target.value })}
        />
        <AuthInput
          type='text'
          placeholder='Фамилия...'
          value={data.lastName}
          onChange={(e) => authStore.setData({ lastName: e.target.value })}
        />
        <AuthInput
          type='button'
          value='Продолжить'
          onClick={(e) => {
            e.preventDefault()
            authStore.setStep(true)
          }}
        />
      </>
    )
    case 'second-signup': 
    return (
      <>
        <AuthInput
          type='email'
          placeholder='Email...'
          value={data.email}
          onChange={(e) => authStore.setData({ email: e.target.value })}
        />
        <AuthInput
          type='password'
          placeholder='Пароль...'
          value={data.password}
          onChange={(e) => authStore.setData({ password: e.target.value })}
        />
        <AuthInput
          type='password'
          placeholder='Подтвердите пароль...'
          value={data.repeatPassword}
          onChange={(e) => authStore.setData({ repeatPassword: e.target.value })}
        />
        <AuthInput
          type='button'
          value='Создать'
          onClick={() => authStore.signUp()}
        />
        <Link
          className={s.back}
          href='#'
          onClick={(e) => {
            e.preventDefault()
            authStore.setStep(false)
          }}
        >
          Вернуться назад
        </Link>
      </>
    )
    default: return null
  }
})
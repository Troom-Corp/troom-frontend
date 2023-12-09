'use client'

import { observer } from 'mobx-react-lite'
import Link from 'next/link'

import { authStore } from '@/store'
import { UiInput } from '@/UI'

import s from './styles.module.scss'

interface AuthDataProps {
  type: string
}

export const AuthData: React.FC<AuthDataProps> = observer(({ type }) => {
  const data = authStore.data

  if (type === 'signin') {
    return (
      <>
        <UiInput
          type='email'
          placeholder='Логин...'
          value={data.login}
          onChange={(e) => authStore.setData({ login: e.target.value })}
        />
        <UiInput
          type='password'
          placeholder='Пароль...'
          value={data.password}
          onChange={(e) => authStore.setData({ password: e.target.value })}
        />
        <UiInput
          type='button'
          value='Войти'
          onClick={() => authStore.signIn(data.login, data.password)}
        />
      </>
    )
  } else if (type === 'first-signup') {
    return (
      <>
        <UiInput
          type='text'
          placeholder='Логин...'
          value={data.login}
          onChange={(e) => authStore.setData({ login: e.target.value })}
        />
        <UiInput
          type='text'
          placeholder='Имя...'
          value={data.firstName}
          onChange={(e) => authStore.setData({ firstName: e.target.value })}
        />
        <UiInput
          type='text'
          placeholder='Фамилия...'
          value={data.lastName}
          onChange={(e) => authStore.setData({ lastName: e.target.value })}
        />
        <UiInput
          type='button'
          value='Продолжить'
          onClick={(e) => {
            e.preventDefault()
            authStore.setStep(true)
          }}
        />
      </>
    )
  } else {
    return (
      <>
        <UiInput
          type='email'
          placeholder='Email...'
          value={data.email}
          onChange={(e) => authStore.setData({ email: e.target.value })}
        />
        <UiInput
          type='password'
          placeholder='Пароль...'
          value={data.password}
          onChange={(e) => authStore.setData({ password: e.target.value })}
        />
        <UiInput
          type='password'
          placeholder='Подтвердите пароль...'
          value={data.repeatPassword}
          onChange={(e) => authStore.setData({ repeatPassword: e.target.value })}
        />
        <UiInput
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
  }
})
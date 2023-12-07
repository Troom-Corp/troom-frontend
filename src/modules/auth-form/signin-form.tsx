import { AuthData, AuthFooter } from '@/components/auth'

import s from './styles.module.scss'

export const SignInForm = () => {
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
}
import { AuthData, AuthFooter } from '@/components/auth'

import s from '../styles.module.scss'



export const SignInForm = () => {
  return (
    <form className={s.form}>
      <div>
        <h1>Войдите в аккаунт</h1>
      </div>
      <div className={s.input__container}>
        <AuthData type='signin' />
      </div>
      <AuthFooter />
    </form>
  )
}

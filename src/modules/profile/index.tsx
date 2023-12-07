'use client'

import { useContext } from 'react'
import { observer } from 'mobx-react-lite'

import { Context } from '../../app/providers'

import s from './styles.module.scss'

export const Profile: React.FC = observer(() => {
  const { authStore } = useContext(Context)

  return (
    <div className={s.profile}>
      <div className={s.info}>
        <p>{`${authStore.user.firstName}`}</p>
        <p>Frontend dev</p>
        <div className={s.avatar}>
        </div>
        <p>Илья Марков</p>
        <p>Илья Марков</p>
      </div>
    </div>
  )
})

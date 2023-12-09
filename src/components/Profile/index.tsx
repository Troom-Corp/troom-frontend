'use client'

import { observer } from 'mobx-react-lite'

import { authStore } from '@/store'

import s from './styles.module.scss'

interface ProfileProps {
  params: string
}

export const Profile: React.FC<ProfileProps> = observer(({ params }) => {
  

  return (
    <div className={s.profile}>
      <div className={s.info}>
        <p>{params}</p>
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

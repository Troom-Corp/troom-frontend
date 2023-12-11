'use client'

import { observer } from 'mobx-react-lite'

import { authStore } from '@/store'
import mockAvatar from '@/assets/ava.jpg'
 
import s from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link'

interface ProfileProps {
  login: string
}

export const Profile: React.FC<ProfileProps> = observer(({ login }) => {
  
  const user = authStore.user
  const fullName = `${user.firstName} ${user.lastName}`

  if (login === user.login) {
    return (
      <div className={s.profile}>
        <div className={s.wrapper}>
          <Image className={s.avatar} src={mockAvatar} alt='avatar' />
          <div>
            <h1>{fullName}</h1>
            <p>Фронтенд Разработчик</p>
          </div>
          <div className={s.buttons}>
            <Link href='/settings'>Редактировать</Link>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <h1 className={s.profile}>Чужой профиль</h1>



    )
  }
})

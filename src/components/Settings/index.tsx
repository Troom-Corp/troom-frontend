'use client'

import { observer } from 'mobx-react-lite'
import Image from 'next/image'

import { authStore } from '@/store'
import mockAvatar from '@/assets/ava.jpg'

import s from './styles.module.scss'

export const Settings = observer(() => {
  const user = authStore.user
  return (
    <section className={s.settings}>
      <div className={s.title}>
        <Image src={mockAvatar} alt='avatar' />
        <h1>Настройки профиля</h1>
      </div>
      <div className={s.value}>
        <div>
          <p>Имя:</p>
          <input placeholder={user.firstName} />
        </div>
        <p>Редактировать</p>
      </div>
      <div className={s.value}>
        <div>
          <p>Фамилия:</p>
          <input placeholder={user.lastName} />
        </div>
        <p>Редактировать</p>
      </div>
      <div className={s.value}>
        <div>
          <p>Логин:</p>
          <input placeholder={user.login} />
        </div>
        <p>Редактировать</p>
      </div>
      <div className={s.value}>
        <div>
          <p>Email:</p>
          <input placeholder={user.email} />
        </div>
        <p>Редактировать</p>
      </div>
      <div className={s.value}>
        <div>
          <p>Пол:</p>
          <input placeholder={user.gender ? user.gender === 'M' ? 'Мужской' : 'Женский' : ''} />
        </div>
        <p>{user.gender ? 'Редактировать' : 'Добавить'}</p>
      </div>
      <div className={s.value}>
        <div>
          <p>Дата рождения:</p>
          <input placeholder={user.gender ? user.birthday : ''} />
        </div>
        <p>{user.birthday ? 'Редактировать' : 'Добавить'}</p>
      </div>
      <div className={s.value}>
        <div>
          <p>Город:</p>
          <input placeholder={user.location ? user.location : ''} />
        </div>
        <p>{user.location ? 'Редактировать' : 'Добавить'}</p>
      </div>
      <div className={s.value}>
        <div>
          <p>Профессия:</p>
          <input placeholder={user.job ? user.job : ''} />
        </div>
        <p>{user.job ? 'Редактировать' : 'Добавить'}</p>
      </div>
      <div className={s.value}>
        <div>
          <p>Номер телефона:</p>
          <input placeholder={user.phone ? user.phone : ''} />
        </div>
        <p>{user.phone ? 'Редактировать' : 'Добавить'}</p>
      </div>
      <div className={s.value}>
        <div>
          <p>Личные ссылки:</p>
          <input placeholder={user.links ? user.links : ''} />
        </div>
        <p>{user.links ? 'Редактировать' : 'Добавить'}</p>
      </div>
      <div className={s.value}>
        <div>
          <p>О себе:</p>
          <input placeholder={user.bio ? user.bio : ''} />
        </div>
        <p>{user.bio ? 'Редактировать' : 'Добавить'}</p>
      </div>
    </section>
  )
})
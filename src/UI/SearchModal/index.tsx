'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { IUser } from '@/types'
import { searchStore } from '@/store'

import s from './styles.module.scss'

export const SearchModal = () => {
  const debouncedQuery = searchStore.useDebouncedQuery()
  const result = searchStore.searchResults

  //!=== DEBOUNCE SEARCH ===!
  useEffect(() => {
    if (debouncedQuery) {
      searchStore.searchUsers()
    }
  }, [debouncedQuery])

  if (debouncedQuery) return (
    <ul className={s.list}>
      <Link onClick={() => searchStore.setQuery('')} className={s.all} href={'/searchall'}>Показать все результаты</Link>
      {result ? result.map((user: IUser) =>
        <li key={user.id}>
          <Link className={s.element} onClick={() => searchStore.setQuery('')} href={`/${user.login}`}>
            <Image src={'/ava.jpg'} alt='userlogo' width={40} height={40} />
            <div>
              <p className={s.name}>{`${user.firstName} ${user.lastName}`}</p>
              <p className={s.job}>{user.job}</p>
            </div>
          </Link>
        </li>)
        :
        <li>По вашему запросу ничего не найдено</li>
      }
    </ul>
  )

  else return null
}
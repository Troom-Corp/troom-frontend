'use client'

import { useContext } from 'react'
import { observer } from 'mobx-react-lite'

import { Context } from '../../../app/providers'
import { SearchModal } from '../search-modal'
import { Svg } from '@/UI'

import s from './styles.module.scss'

export const SearchInput = observer(() => {
  const { searchStore } = useContext(Context)

  return (
    <div className={s.search}>
      <input
        className={s.input}
        type='search'
        value={searchStore.query}
        onChange={(e) => searchStore.setQuery(e.target.value)}
        placeholder='Поиск...'
      />
      <Svg icon='search' />
      <SearchModal />
    </div>
  )
})

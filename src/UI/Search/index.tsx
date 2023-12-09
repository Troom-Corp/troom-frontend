'use client'

import { observer } from 'mobx-react-lite'

import { Svg, SearchModal } from '@/UI'
import { searchStore } from '@/store'

import s from './styles.module.scss'

export const Search = observer(() => {

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

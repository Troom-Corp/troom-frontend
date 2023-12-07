'use client'

import { useState } from "react"
import Link from "next/link"

import s from './styles.module.scss'

const mockupContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus deleniti iste non doloremque nulla quam eveniet quas sapiente. Voluptatum distinctio sunt sed, impedit accusantium saepe voluptas esse quaerat voluptates minima dolore perspiciatis maiores fugiat aliquam at laudantium eos! Quam, cupiditate animi. Esse nostrum labore eveniet nulla mollitia eos ad ipsa tenetur officiis expedita natus quisquam, minus dolores earum. Dolores aperiam autem repudiandae vero a, consectetur ipsum laudantium ipsam alias suscipit deserunt ad, numquam quaerat et minus inventore unde obcaecati tempore magnam voluptas eum omnis! Corporis est consequatur debitis illo quis et culpa similique, odit autem nihil esse id magni nam!'

export const PostText = () => {
  const maxLength = mockupContent.length > 250
  const [showText, setShowText] = useState<boolean>(false)

  return (
    <div className={s.text}>
      <h3 className={s.title}>Инновации в Backend разработке</h3>
      <p className={`${maxLength && ''}${showText ? '' : s.hide}`}>
        {maxLength && showText ? mockupContent : mockupContent.slice(0, 250)}
      </p>
      {maxLength && 
        <Link
          href='#'
          className={s.more}
          onClick={() => setShowText(!showText)}
        >
          {showText ? 'Скрыть' : 'Смотреть всё'}
        </Link>
      }
    </div>
  )
}
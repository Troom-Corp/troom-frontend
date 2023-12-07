import { Svg } from '@/UI'

import styles from '@/styles/Post.module.scss'

export const PostFooter = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_left}>
        <div className={styles.footer_btn}>
          <Svg icon='like' />
          <p>965</p>
        </div>
        <div className={styles.footer_btn}>
          <Svg icon='comment' />
          <p>72</p>
        </div>
        <div className={styles.footer_btn}>
          <Svg icon='share' />
        </div>
      </div>
      <div className={styles.footer_btn}>
        <Svg icon='views' />
        <p>91,532</p>
      </div>
    </div>
  )
}
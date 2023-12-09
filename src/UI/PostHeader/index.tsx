import s from './styles.module.scss'

export const PostHeader = () => {
  return (
    <div className={s.header}>
      <img className={s.avatar} src="/yandex.svg" alt="" />
      <div className={s.info}>
        <p className={s.name}>Yandex Dev</p>
        <p>Компания / IT</p>
      </div>
      <p className={s.date}>20 Июня 2024</p>
    </div>
  )
}
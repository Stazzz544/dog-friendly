import { FC } from 'react'
import headerBg from '../../img/bg/header/headerBg.jpg'
import headerBg320 from '../../img/bg/header/headerBg320.jpg'
import headerBg768 from '../../img/bg/header/headerBg768.jpg'

import s from './promo.module.css'

const Promo: FC = () => {
  return (
    <div className={s.promo}>
        <picture>
            <source media="(max-width: 768px)" srcSet={headerBg320} />
            <source media="(max-width: 1200px)" srcSet={headerBg768} />
            <img className={s.img} src={headerBg} alt="background img" />
        </ picture>
        <h1 className={s.title}>Сёрф-тур для хороших мальчиков</h1>
    </div>
    )
}

export default Promo
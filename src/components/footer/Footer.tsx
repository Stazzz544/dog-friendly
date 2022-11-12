import { FC } from 'react'
import s from './footer.module.css'
import { ReactComponent as SchoolFriends } from "../../img/icon/social/schoolFriends.svg";
import { ReactComponent as Telegramm } from "../../img/icon/social/telegramm.svg";
import { ReactComponent as Vk } from "../../img/icon/social/vk.svg";

const Footer: FC = () => {
    return (
        <footer className={s.footer}>
            <div className={s.leftFlexContainer}>
                <div className={s.leftFlexGroup}>
                    <p>Горячая линия</p>
                    <p className={s.phone}><a href="tel:88003339963">8 800 333 99 63</a></p>
                </div>
                <div>
                    <p className={s.email}><a href="mailto:info@sletat.ru">info@sletat.ru</a></p>
                </div>
            </div>
 
            <div className={s.centerFlexContainer}>

                <div className={s.linksWrapper}>
                    <div className={s.groupFlex}>
                        <span><a href="#">Поиск тура</a></span>
                        <span><a href="#">О компании</a></span>
                    </div>
                    <div className={s.groupFlex}>
                        <span><a href="#">Travel блог</a></span>
                        <span><a href="#">Новости</a></span>
                    </div>
                    <div className={s.groupFlex}>
                        <span><a href="#">Партнерам</a></span>
                        <span><a href="#">Контакты</a></span>
                    </div>
                 </div>
                 <div className={s.agreements}>
                    <p>© 2022 Все права защищены. Используя сайт, в ы принимаете условия соглашений :</p>
                    <p><a href="#">Пользовательское соглашение</a></p>
                    <p><a href="#">Об ограничении ответственности</a></p>
                    <p><a href="#">Об обработке персональных данных</a></p>
                    <p><a href="#">Информация на сайте не является публичной офертой: условия сотрудничества. Результаты проведения СОУТ.</a></p>
                    <p><a href="#">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</a></p>
                 </div>

            </div>

            <div className={s.rightFlexContainer}>
                 <div className={s.socialWrapper}>
                    <a href=""><Vk /></a>
                    <a href=""><SchoolFriends /></a>
                    <a href=""><Telegramm /></a> 
                 </div>
            </div>

        </footer>
        )
}

export default Footer;
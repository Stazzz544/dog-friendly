import s from "./aboutTour.module.css";
import { FC } from "react";
import { ReactComponent as Calendar } from "../../../img/icon/aboutTour/calendar.svg";
import { ReactComponent as Dog } from "../../../img/icon/aboutTour/dog.svg";
import { ReactComponent as People } from "../../../img/icon/aboutTour/people.svg";
import { ReactComponent as Point } from "../../../img/icon/aboutTour/point.svg";
import { ReactComponent as Time } from "../../../img/icon/aboutTour/time.svg";
import { ReactComponent as Rubl } from "../../../img/icon/form/rubl.svg";

const daysColor = (day: string): string | undefined => {
  const currentDay = day.toLocaleLowerCase();
  if (currentDay === "сб" || currentDay === "вс") {
    return "#FB4242";
  } else {
    return "#A1A1A1";
  }
};

const AboutTour: FC = () => {
  return (
    <div className={s.mainWrapper}>
      <div className={s.tourType}>
        <h3 className={s.tourTypeDiscription}>Групповой</h3>
        <Dog className={s.tourTypeSvg} />
        <div className={s.tourTypeAmount}>10</div>
      </div>
      <h2 className={s.tourTitle}>Сёрф-тур для хороших мальчиков</h2>

      <div className={s.aboutTour}>

        <div className={s.coupleGroups}>
          <div className={s.groupElem}>
            <Point />
            <span className={s.aboutTourDiscr}>Аэропорт Хайнань</span>
          </div>
          <div className={s.groupElem}>
            <Time />
            <span className={s.aboutTourDiscr}>3 дня / 4 ночи</span>
          </div>
        </div>

        <div className={s.coupleGroups}>
          <div className={s.groupElem}>
            <Calendar />
            <span className={s.aboutTourDiscr}>
              31 сентября{" "}
              <span className={s.day} style={{ color: daysColor("пн") }}>
                ПН
              </span>
              <span className={s.dash}> — </span>5 ноября{" "}
              <span className={s.day} style={{ color: daysColor("вс") }}>
                ВС
              </span>
            </span>
          </div>

          <div className={s.groupElem}>
            <People />
            <span className={s.aboutTourDiscr}>1 пёс + 2 человека</span>
          </div>
        </div>

      </div>
      <div className={s.promocode}>Ввести промокод</div>
      <div className={s.divider}></div>

      <div className={s.ditails}>
        <div className={s.priceWrapper}>
          <p className={s.priceText}>Стоимость тура</p>
          <div className={s.priceFlex}>
            <div className={s.detailedPrice}>100 000</div>
            <Rubl className={s.currency} />
            <div className={s.multiplicator}>x 2</div>
          </div>
        </div>

        <div className={s.priceWrapperTotal}>
          <p className={s.priceTextTotal}>Итого к оплате</p>
          <div className={s.priceTotalFlexWrapper}>
            <div className={s.totalPrice}>200 000</div>
            <Rubl className={s.currencyTotal} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTour;

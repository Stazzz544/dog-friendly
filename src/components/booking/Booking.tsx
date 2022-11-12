/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useState } from "react";
import s from "./booking.module.css";
import ClientForm from "./clientForm/ClientForm";
import PetForm from "./petForm/PetForm";
import { ReactComponent as Rubl } from "../../img/icon/form/rubl.svg";
import Checkbox from "../common/checkbox/Checkbox";
import AboutTour from "./aboutTour/AboutTour";

const Booking: FC = () => {
  const [isClientAgree, setClientAgree] = useState<boolean>(true);

  return (
    <section className={s.mainWrapper}>
      <h2 className={s.title}>Бронирование тура</h2>

      <div className={s.flexWrapper}>

        <div className={s.clientInfo}>
          <ClientForm />
          <h2 className={s.formTitle}>Информация о туристах</h2>
          <p className={s.discription}>Пусть это заполнят твои двуногие</p>
          <PetForm
            isDefaultClosed={false}
            formTitle="Данные о первом двуногом"
          />
          <PetForm
            isDefaultClosed={true}
            formTitle="Данные о втором двуногом"
          />
          <div className={s.paymentWrapper}>
            <div className={s.countWrapper}>
              <p className={s.countText}>К оплате</p>
              <span className={s.countMoney}>200 000</span>
              <Rubl className={s.currency} />
            </div>

            <div className={s.bookWrapper}>
              <button disabled={!isClientAgree} className={s.bookBtn}>Забронировать</button>
              <div className={s.agreement}>
                <Checkbox state={isClientAgree} stateHandler={setClientAgree} />
                <div className={s.agreementText}>
                  Я согласен на обработку своих персональных данных согласно{" "}
                  <a className={s.agreementLink} href="#">
                    политике конфиденциальности
                  </a>{" "}
                  и с условиями{" "}
                  <a className={s.agreementLink} href="#">
                    оферты
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={s.tourInfo}>
          <AboutTour />
          <div className={s.help}>
            <div className={s.helpText}>Нужна помощь?</div>
            <a className={s.helpPhone} href="tel:88003339963">8 800 333 99 63</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Booking;

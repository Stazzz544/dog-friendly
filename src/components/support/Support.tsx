import { FC, useState } from "react";
import s from "./support.module.css";
import InputMask from "react-input-mask";
import CheckboxMiddle from "../common/checkboxMiddle/CheckboxMiddle";
import dogImg from "../../img/bg/support/dog.png";

const Support: FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("+7");
  const [isChecked, setChecked] = useState(false);

  return (
    <section className={s.supportMainWrapper}>
      <div className={s.supportWrapper}>
        <h1 className={s.supportTitle}>Нужна помощь?</h1>
        <h2 className={s.supportSubtitle}>
          Наши менеджеры с удовольствием погавкают с вами о всех ваших вопросах
        </h2>
        <div>
          <div className={s.supportFiled}>
            <div className={s.phoneWrapper}>
              <InputMask
                className={s.phoneField}
                maskPlaceholder=""
                alwaysShowMask={false}
                mask="+9 999 999-99-99"
                value={phoneNumber}
                onChange={(e: any) => setPhoneNumber(e.target.value)}
              />

              <label className={s.phoneLabel}>Ваш номер телефона</label>
            </div>
            <button disabled={!isChecked} className={s.callMeBtn}>
              Перезвоните мне
            </button>
          </div>
        </div>
        <div className={s.agreementWrapper}>
        <div className={s.checkboxWrapper}>
            <CheckboxMiddle state={isChecked} stateHandler={setChecked} />
        </div>
          <p className={s.agreementText}>
            Я согласен на обработку своих персональных данных согласно{" "}
            <a className={s.agreementLink} href="#">
              политике конфиденциальности
            </a>
          </p>
        </div>
      </div>
      <div className={s.imgWrapper}>
        <img src={dogImg} alt="dog" />
      </div>
    </section>
  );
};

export default Support;

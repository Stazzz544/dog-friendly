import { FC } from "react";
import s from "./clientForm.module.css";

const ClientForm: FC = () => {
  return (
    <div>
      <h2 className={s.formTitle}>Данные покупателя</h2>
      <div className={s.flexWrapper}>
        <input placeholder="Email" type="text" />
        <input placeholder="Телефон" type="text" />
      </div>
    </div>
  );
};

export default ClientForm;

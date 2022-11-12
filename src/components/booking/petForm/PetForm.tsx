import { FC, useState } from "react";
import s from "./petForm.module.css";
import { ReactComponent as ArrowDown } from '../../../img/icon/form/arrowDown.svg';
import { ReactComponent as ArrowUp } from "../../../img/icon/form/arrowUp.svg";

type FormProps = {
  formTitle: string;
  isDefaultClosed: Boolean
};

const PetForm: FC<FormProps> = ({ formTitle, isDefaultClosed }) => {
    const [isFromOpen, setFormOpen] = useState(isDefaultClosed)
    const height = isFromOpen ? '52px' : '500px';


    const clickHandler = () => setFormOpen(prev => !prev)
  return (
    <div style={ {maxHeight: height}} className={s.form}>
      <div className={s.formTitleFlex}>
        <h2 className={s.formTitle}>{formTitle}</h2>
        <button onClick={clickHandler}>
            {isFromOpen ?  <ArrowDown/> : <ArrowUp/> }
        </button>
      </div>

      <div className={s.flexWrapper}> 
        <input className={s.formField} placeholder="Фамилия" type="text" />
        <input className={s.formField} placeholder="Имя" type="text" />
        <input className={s.formField} placeholder="Отчество" type="text" />
        <input
          className={s.formField}
          placeholder="Дата рождения"
          type="text"
        />
        <input
          className={s.formField}
          placeholder="Серия и номер паспорта"
          type="text"
        />
        <input className={s.formField} placeholder="Когда выдан" type="text" />
        <input
          className={s.formFieldWide}
          placeholder="Кем выдан"
          type="text"
        />
      </div>
    </div>
  );
};

export default PetForm;

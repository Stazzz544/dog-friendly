import { Dispatch, FC, SetStateAction } from 'react';
import s from './checkbox.module.css'

type checkboxControl = {
    state: boolean;
    stateHandler: Dispatch<SetStateAction<boolean>>
  };

const Checkbox: FC<checkboxControl> = ({state, stateHandler}) => {
  return (
    <label className={s.agreementCheckboxLabel}>
      <input onClick={() => stateHandler(!state)} className={s.agreementCheckbox} type="checkbox" defaultChecked={state} />
    </label>
  );
};

export default Checkbox;

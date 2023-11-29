import { useState } from "react";
import { Check, Trash } from "phosphor-react";

import * as S from "./styles";

export function TaskItem() {
  const [checked, setChecked] = useState<boolean>(false);

  const handleToggleCheck = () => {
    setChecked(!checked);
    console.log(checked);
  };

  return (
    <S.TaskItem checked={checked}>
      <div onClick={handleToggleCheck}>
        <input type="checkbox" readOnly />
        <S.Checkbox checked={checked}>
          {checked && <Check size={12} color="#F2F2F2" />}
        </S.Checkbox>
        <p>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </p>
      </div>
      <S.DeleteButton>
        <Trash size={16} color="#808080" />
      </S.DeleteButton>
    </S.TaskItem>
  );
}

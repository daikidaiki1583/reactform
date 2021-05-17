import React, { FC } from "react";
import "./Inputform.css";

type Props = {
  id: string;
  type: string;
  placeholder: string;
};

const Inputform: FC<Props> = (props) => {
  const [value, setValue] = React.useState<string>("");
  const [isFocus, setFocus] = React.useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    if (!value) {
      setFocus(false);
    }
  };

  return (
    <div className="input_wraper">
      <input
        id={props.id}
        value={value}
        type={props.type}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <label htmlFor={props.id}>
        <span className={isFocus ? "placeholder focus" : "placeholder "}>
          {props.placeholder}
        </span>
      </label>
    </div>
  );
};

export default Inputform;

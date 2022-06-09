import React, { InputHTMLAttributes } from "react";

import "./formInput.css";

type Iprops = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInputSignIn: React.FC<Iprops> = ({ label, ...otherProps }) => {
  return (
    <div>
      <input className="input-class" {...otherProps} />
    </div>
  );
};

export default FormInputSignIn;

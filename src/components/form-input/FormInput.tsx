import React, { InputHTMLAttributes } from "react";

type Iprops = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInputSignIn: React.FC<Iprops> = ({ label, ...otherProps }) => {
  return (
    <div>
      <input {...otherProps} />
    </div>
  );
};

export default FormInputSignIn;

import React, { useState } from "react";
import {
  signInWithGooglePopup,
  signAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase";

import FormInput from "../form-input/FormInput";
import "../form-input/formInput.css";

const defaultFormFields = {
  email: "",
  password: "",
};

export type Iprops = {
  user?: {
    displayName?: string;
    email: string;
    password: string;
  };
};

export default function SignIn() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async (e: React.FormEvent) => {
    e.preventDefault();
    await signInWithGooglePopup();
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await signAuthUserWithEmailAndPassword(email, password);
      console.log(response);
      resetFormFields();
    } catch (error) {
      console.log("error! cant log userin", error);
    }
  };
  return (
    <div>
      <div className="sign-up-container">
        <h3>Already have an account?</h3>
        <p className="span-text">Please enter your e-mail and password:</p>
        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
            placeholder="Email"
          />

          <FormInput
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
            placeholder="Password"
          />

          <div className="btn-flex">
            <button className="regularBtn">LOGIN</button>
            <button className="googleBtn" onClick={signInWithGoogle}>
              GOOGLE LOGIN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

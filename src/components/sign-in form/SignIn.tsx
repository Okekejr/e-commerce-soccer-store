import React, { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase";

import FormInput from "../form-input/FormInput";

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
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
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
        <span>Sign in with your email and password</span>
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

          <button>LOGIN</button>
          <button onClick={signInWithGoogle}>GOOGLE LOGIN</button>
        </form>
      </div>
    </div>
  );
}

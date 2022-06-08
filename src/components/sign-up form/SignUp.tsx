import React, { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import { AuthError, AuthErrorCodes } from "firebase/auth";

import FormInput from "../form-input/FormInput";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export type Iprops = {
  user?: {
    displayName?: string;
    email: string;
    password: string;
  };
};

export default function SignUp() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(response?.user!, { displayName });
      resetFormFields();
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };
  return (
    <div>
      <div className="sign-up-container">
        <h3>Don't have an account?</h3>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            required
            onChange={handleChange}
            name="displayName"
            value={displayName}
            placeholder="Display Name"
          />

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

          <FormInput
            type="password"
            required
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm Password"
          />
          <button>CREATE ACCOUNT</button>
        </form>
      </div>
    </div>
  );
}

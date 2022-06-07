import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

export default function SignIn() {
  const googleHandler = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <button onClick={googleHandler}>Google Sign-in</button>
    </div>
  );
}

import SignIn from "../../components/sign-in form/SignIn";
import SignUp from "../../components/sign-up form/SignUp";

import "./authentication.css";

export default function Authentication() {
  return (
    <div className="outerContainer">
      <SignIn />
      <SignUp />
    </div>
  );
}

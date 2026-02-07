import { DialogFooter, DialogTitle } from "@/components/ui/dialog";
import LoginForm from "@/components/ui/LoginForm";
import { Link } from "react-router-dom";
import { useState } from "react";
import RegisterForm from "@/components/ui/RegisterForm";

const Auth = () => {
  const [state, setState] = useState("login");
  return (
    <>
      <DialogTitle className={"flex flex-col gap-1"}>
        <span className="text-xl md:text-2xl font-light">
          {state?.at(0)?.toLocaleUpperCase() + state?.slice(1)}{" "}
          {state === "register" ? "on" : "to"} SeatHelp
        </span>
        <span className="text-sm text-gray-400 italic">
          Join other leaners to get / offer help to the community
        </span>
      </DialogTitle>

      {state === "login" ? <LoginForm /> : <RegisterForm />}
      <DialogFooter className="text-sm ps-4 text-gray-500 italic block space-x-2">
        <span>
          {state === "register" ? "Already" : "Don't"} have an account ?{" "}
        </span>
        <Link
          className="!text-blue-500 hover:text-blue-800! !underline cursor-pointer "
          onClick={() =>
            setState((prev) => (prev === "register" ? "login" : "register"))
          }
        >
          {state === "register" ? "Login" : "Register"}
        </Link>
      </DialogFooter>
    </>
  );
};

export default Auth;

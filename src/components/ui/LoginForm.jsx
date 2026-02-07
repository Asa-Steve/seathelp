import { Button } from "@/components/ui/button";
import FormRow from "@/components/ui/FormRow";
import { constructReg } from "@/helpers/helper";
import { useForm } from "react-hook-form";
import { Icon } from "@iconify/react";
import { useState } from "react";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPw, setShowPw] = useState(false);

  //on Submit handler fnc
  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form
      className="w-full flex gap-3 flex-col p-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormRow
        rule={constructReg(register, "email", {
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "enter valid email",
          },
        })}
        hasErr={errors}
        label="E-mail"
        type="email"
      />
      <FormRow
        label={"Password"}
        type={showPw ? "text" : "password"}
        rule={constructReg(
          register,
          "password",
          {
            minLength: {
              value: 6,
              message: "password must be at least 6 characters",
            },
          },
          "password cannot be blank",
        )}
        hasErr={errors}
      >
        <Icon
          icon={showPw ? "mdi-light:eye" : "mdi-light:eye-off"}
          className="absolute right-3 top-[55%]"
          onClick={() => setShowPw((prev) => !prev)}
          width={20}
          height={20}
          cursor="pointer"
        />
      </FormRow>
      <FormRow hasInput={false}>
        <Button
          type="submit"
          variant="outline"
          className=" w-full sm:w-[40%] me-auto cursor-pointer hover:bg-green-800 bg-green-600 text-white"
        >
          Login
        </Button>
      </FormRow>
    </form>
  );
};

export default LoginForm;

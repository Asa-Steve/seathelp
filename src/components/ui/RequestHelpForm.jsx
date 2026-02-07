import { Button } from "@/components/ui/button";
import FormRow from "@/components/ui/FormRow";
import { constructReg } from "@/helpers/helper";
import { useForm } from "react-hook-form";

const RequestHelpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //on Submit handler fnc
  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex gap-3 flex-col min-w-[80vw] min-h-[55vh] sm:min-w-[70vw] md:min-w-[45vw] md:min-h-[60vh]"
    >
      <FormRow
        rule={constructReg(
          register,
          "subject",
          null,
          "subject cannot be blank",
        )}
        hasErr={errors}
        label="Subject"
      />
      <FormRow
        styles={"flex-1"}
        label="Describe the problem"
        hasInput={false}
        hasErr={errors}
        rule={{ name: "desc" }}
      >
        <textarea
          {...constructReg(
            register,
            "desc",
            null,
            "problem description cannot be blank",
          )}
          id="Describe the problem"
          className="border border-gray-200 h-full resize-none focus:outline-0 p-2"
        />
      </FormRow>
      <Button
        className={
          "bg-green-600 w-full sm:w-[40%] me-auto text-white  cursor-pointer hover:bg-green-700"
        }
      >
        Submit Request
      </Button>
    </form>
  );
};

export default RequestHelpForm;

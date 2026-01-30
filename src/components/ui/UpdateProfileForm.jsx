import { Button } from "@/components/ui/button";
import FormRow from "@/components/ui/FormRow";
import { constructReg } from "@/helpers/helper";
import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const UpdateProfileForm = ({ userData }) => {
  const imgRef = useRef(null);
  const [preview, setPreview] = useState(null);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const imgChange = watch("img");

  function onSubmit(data) {
    console.log({ data });
  }

  useEffect(
    () => imgChange && setPreview(URL.createObjectURL(imgChange)),
    [imgChange],
  );

  return (
    <div className="max-h-[70vh] overflow-auto scrollbar-hide md:w-fit md:min-w-[70vw] lg:min-w-[40vw] w-[80vw]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="overflow-auto h-full scrollbar-hide flex flex-col gap-2"
      >
        {/* Dp wrap */}
        <div className="h-30 flex justify-between items-center p-2">
          {preview || userData?.img ? (
            <img
              src={preview ? preview : userData?.img}
              className="border-gray-500 outline outline-green-600 object-cover outline-offset-2 h-25 w-25 rounded-full"
              alt=""
            />
          ) : (
            <Icon
              className="text-gray-400 border-gray-500 outline outline-green-600 outline-offset-2 border w-25 h-25 rounded-full"
              icon="ph:user-thin"
            />
          )}
          <div
            onClick={() => imgRef?.current.click()}
            className="bg-gray-50 cursor-pointer hover:border-gray-200 hover:border h-17.5 w-[calc(100%-120px)] rounded-lg flex items-center justify-center flex-col text-gray-400"
          >
            <Icon icon="et:upload" width="25" height="25" />
            <label ref={imgRef} className="italic">
              {" "}
              Upload photo
            </label>
          </div>
        </div>
        <Controller
          name="img"
          control={control}
          rules={{ required: "Please select a photo" }}
          render={({ field }) => (
            <FormRow rule={{ name: "img" }} hasErr={errors} hasInput={false}>
              <input
                type="file"
                onChange={(e) => field.onChange(e.target.files[0] ?? null)}
                accept="image/*"
                hidden
                ref={imgRef}
              />
            </FormRow>
          )}
        />

        {/* Other fileds */}
        <FormRow
          rule={constructReg(register, "fullName")}
          hasErr={errors}
          label="Full Name"
          defaultVal={userData?.fullName}
        />
        <FormRow
          rule={constructReg(register, "displayName")}
          hasErr={errors}
          label="Display Name"
          defaultVal={userData?.displayName}
        />
        <FormRow
          rule={constructReg(register, "email", {
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "enter valid email",
            },
          })}
          hasErr={errors}
          label="E-mail"
          defaultVal={userData?.email}
          type="email"
        />
        <FormRow label={"Preferences"} hasInput={false}>
          <Controller
            name="preference"
            control={control}
            rules={{ required: "Please select a preference" }}
            render={({ field }) => (
              <FormRow
                rule={{ name: "preference" }}
                hasErr={errors}
                hasInput={false}
              >
                <RadioGroup value={field.value} onValueChange={field.onChange}>
                  <div className="flex gap-3 gap-y-1 flex-wrap">
                    <span className="flex font-light items-center gap-3 text-sm sm:text-lg md:p-1">
                      <label htmlFor="v1">show fullname</label>
                      <RadioGroupItem
                        value="show_fullName"
                        id="v1"
                        className={"size-3 md:size-4"}
                      />
                    </span>
                    <span className="flex font-light items-center gap-3 md:p-1 text-sm sm:text-lg">
                      <label htmlFor="v2">show display name</label>
                      <RadioGroupItem
                        value="show_displayName"
                        id="v2"
                        className={"size-3 md:size-4"}
                      />
                    </span>
                    <span className="flex font-light items-center gap-3 md:p-1 text-sm sm:text-lg">
                      <label htmlFor="v3"> show anonymous</label>
                      <RadioGroupItem
                        value="show_anonymous"
                        id="v3"
                        className={"size-3 md:size-4"}
                      />
                    </span>
                  </div>
                </RadioGroup>
              </FormRow>
            )}
          />
        </FormRow>
        <Button
          variant="outline"
          size="default"
          className={
            "bg-green-600 hover:bg-green-700 cursor-pointer w-full sm:w-[40%] me-auto text-white mb-4"
          }
        >
          Save changes
        </Button>
      </form>
    </div>
  );
};

export default UpdateProfileForm;

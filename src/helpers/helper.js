export const constructReg = (register, regName, options, msg) =>
  register(regName, {
    required: {
      value: true,
      message: msg ?? "this field is really required",
    },
    ...options,
  });

const FormRow = ({
  label,
  hasErr,
  children,
  rule,
  styles,
  defaultVal = "",
  type = "text",
  hasInput = true,
}) => {
  return (
    <div className={"flex flex-col relative " + styles}>
      {label && (
        <label className="mb-1 font-light" htmlFor={label}>
          {label}
        </label>
      )}
      {hasInput && (
        <input
          className="border border-gray-200 h-8.75 focus:outline-0 px-2 text-gray-500"
          id={label}
          type={type}
          defaultValue={defaultVal}
          {...rule}
        />
      )}
      {children}
      {hasErr && hasErr[rule?.name] && (
        <span className="text-sm text-red-800">
          {hasErr[rule?.name]?.message}
        </span>
      )}
    </div>
  );
};

export default FormRow;

import { formatNumber } from "../../utils/helpers.utils";

export const InputField = ({
  label,
  type = "text",
  inputType = "input",
  endIcon: EndIcon,
  disabled = false,
  placeholder = "",
  error = false,
  errorText = "",
  rows = 3,
  value,
  name = "",
  onChange = () => {},
  register,
  required,
  id,
  width,
  noShift = false,
  currencyFormat = false,
  ...restProps
}) => {
  const handleChange = (e) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/,/g, "");

    if (currencyFormat) {
      const formattedValue = formatNumber(numericValue);
      e.target.value = numericValue;
      onChange(formattedValue);
    } else {
      onChange(inputValue);
    }
  };

  let registerProps = {};
  if (register) {
    const registration = register(name, { required });
    registerProps = {
      ...registration,
      onChange: (e) => {
        registration.onChange(e);
        handleChange(e);
      },
    };
  } else {
    registerProps = {
      onChange: (e) => {
        handleChange(e);
      },
    };
  }

  return (
    <div
      className={`flex flex-col gap-1 w-full ${
        width ? width : "w-full"
      } ${noShift ? "h-[90px]" : "h-auto"}`}
    >
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium leading-5 text-gray-500"
        >
          {label}
        </label>
      )}
      {inputType === "input" ? (
        <div className="relative w-full">
          <input
            type={currencyFormat ? "text" : type}
            placeholder={placeholder}
            disabled={disabled}
            id={id}
            name={name}
            value={value}
            {...registerProps}
            {...restProps}
            className={`h-10 px-4 pr-10 rounded-md w-full text-gray-600 text-sm border ${
              error
                ? "border-red-400 focus:ring-2 focus:ring-red-300"
                : "border-gray-300 focus:ring-2 focus:ring-orange-200"
            } focus:outline-none placeholder-gray-400 ${
              disabled
                ? "border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed"
                : ""
            }`}
          />
          {EndIcon && (
            <span className="absolute top-2 right-3 text-gray-400">{EndIcon}</span>
          )}
        </div>
      ) : inputType === "textarea" ? (
        <textarea
          placeholder={placeholder}
          rows={rows}
          disabled={disabled}
          name={name}
          value={value}
          onChange={handleChange}
          {...(register ? register(name, { required }) : {})}
          {...restProps}
          className={`p-2 rounded-md w-full text-gray-600 text-sm border ${
            error
              ? "border-red-400 focus:ring-2 focus:ring-red-300"
              : "border-gray-300 focus:ring-2 focus:ring-orange-200"
          } focus:outline-none placeholder-gray-400 ${
            disabled
              ? "border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed"
              : ""
          }`}
        />
      ) : null}
      {errorText && (
        <p className="text-xs text-red-500 font-normal leading-5">{errorText}</p>
      )}
    </div>
  );
};

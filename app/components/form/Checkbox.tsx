import { InputHTMLAttributes } from "react";

interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  error?: string;
  ref?: React.Ref<HTMLInputElement>;
}

const Checkbox = ({
  label,
  error,
  ref,
  className = "",
  ...props
}: CheckboxProps) => {
  return (
    <div className="w-full">
      <label className="flex items-center cursor-pointer group">
        <div className="relative">
          <input
            ref={ref}
            type="checkbox"
            className={`
              w-5 h-5 border-2 rounded cursor-pointer
              transition-all duration-200
              checked:bg-blue-500 checked:border-blue-500
              focus: outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
              ${error ? "border-red-500" : "border-gray-300"}
              ${props.disabled ? "cursor-not-allowed opacity-50" : ""}
              ${className}
            `}
            {...props}
          />
          <svg
            className="absolute left-1 top-1 w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        {label && (
          <span
            className={`ml-2 text-sm ${
              props.disabled ? "text-gray-400" : "text-gray-700"
            }`}
          >
            {label}
          </span>
        )}
      </label>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

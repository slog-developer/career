import { InputHTMLAttributes } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  ref?: React.Ref<HTMLInputElement>;
}

const TextInput = ({
  label,
  error,
  helperText,
  ref,
  className = "",
  ...props
}: TextInputProps) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={`
            w-full px-3 py-2 border rounded-lg
            focus: outline-none focus:ring-2 focus: ring-blue-500
            transition-colors duration-200
            ${error ? "border-red-500" : "border-gray-300"}
            ${props.disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"}
            ${className}
          `}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
};

TextInput.displayName = "TextInput";

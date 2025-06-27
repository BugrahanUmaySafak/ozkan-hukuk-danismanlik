import { InputHTMLAttributes, forwardRef } from "react";

type Props = {
  error?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, Props>(
  ({ error, ...props }, ref) => (
    <input
      ref={ref}
      {...props}
      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    />
  )
);

Input.displayName = "Input";

export default Input;

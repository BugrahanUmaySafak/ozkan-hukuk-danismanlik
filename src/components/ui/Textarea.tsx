import { TextareaHTMLAttributes, forwardRef } from "react";

type Props = {
  error?: boolean;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ error, ...props }, ref) => (
    <textarea
      ref={ref}
      {...props}
      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    />
  )
);

Textarea.displayName = "Textarea";

export default Textarea;

/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import { ButtonProps } from "./Button.types";

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="flex h-[3.25rem] 
      items-center 
      gap-2 
      rounded-lg 
      bg-blue-500 
      px-4 
      text-sm 
      font-bold 
      text-gray-100 
      transition-colors 
      hover:bg-blue-300 
      disabled:cursor-not-allowed 
      disabled:bg-gray-300"
    >
      {children}
    </button>
  );
}

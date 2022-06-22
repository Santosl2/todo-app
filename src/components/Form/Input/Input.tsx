/* eslint-disable react/jsx-props-no-spreading */
import { InputProps } from "./Input.types";

export function Input({ ...props }: InputProps): JSX.Element {
  return (
    <input
      {...props}
      className="h-[3.375rem] 
      w-full 
      resize-none 
      rounded-lg border 
      border-gray-700 
      bg-gray-500 pl-4 
      text-gray-100 
      placeholder:text-gray-300 
      focus:border-blue-300 
      focus:outline-none"
    />
  );
}

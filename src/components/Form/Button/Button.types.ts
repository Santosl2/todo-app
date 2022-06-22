import { HTMLAttributes, ReactNode } from "react";

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
};

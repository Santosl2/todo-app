import { BadgeProps } from "./Badge.types";

export function Badge({ children }: BadgeProps) {
  return (
    <span className="rounded-full bg-gray-400 px-2 text-gray-200">
      {children}
    </span>
  );
}

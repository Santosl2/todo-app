import { Badge } from "../Badge";
import { TextWithBadgeProps } from "./TextWithBadge.types";

export function TextWithBadge({
  text,
  value,
  color = "text-blue-300",
}: TextWithBadgeProps) {
  return (
    <strong className={`flex items-center gap-2 text-sm ${color}`}>
      {text}
      <Badge>{value}</Badge>
    </strong>
  );
}

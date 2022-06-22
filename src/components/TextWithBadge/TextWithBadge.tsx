import { Badge } from "../Badge";
import { TextWithBadgeProps } from "./TextWithBadge.types";

export function TextWithBadge({ text, value }: TextWithBadgeProps) {
  return (
    <strong className="flex items-center gap-2 text-sm text-blue-300">
      {text}
      <Badge>{value}</Badge>
    </strong>
  );
}

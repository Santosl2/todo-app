import { PlusCircle } from "phosphor-react";

import { Button } from "../Button";
import { Input } from "../Input";

export function MainForm(): JSX.Element {
  return (
    <form className="flex w-full items-center justify-center gap-2">
      <Input placeholder="O que você precisa fazer?" />
      <Button type="submit" disabled>
        Criar <PlusCircle weight="bold" size={16} />
      </Button>
    </form>
  );
}

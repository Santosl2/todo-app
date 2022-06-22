import { FormEvent, useCallback, useMemo, useRef, useState } from "react";

import { PlusCircle } from "phosphor-react";

import { Button } from "../Button";
import { Input } from "../Input";

export function MainForm(): JSX.Element {
  const [inputValue, setInputValue] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const buttonIsDisabled = useMemo(
    () => inputValue.trim().length <= 0,
    [inputValue]
  );

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    console.log("hello world");
  }, []);

  return (
    <form
      className="flex w-full items-center justify-center gap-2"
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <Input
        placeholder="O que você precisa fazer?"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInputValue(e.target.value);
        }}
      />
      <Button type="submit" disabled={buttonIsDisabled}>
        Criar <PlusCircle weight="bold" size={16} />
      </Button>
    </form>
  );
}

import { Notepad } from "phosphor-react";

export function NoResults() {
  return (
    <div className="flex h-60 flex-col items-center justify-center rounded-lg border-t border-gray-400 text-gray-300">
      <Notepad size={56} />{" "}
      <strong className="mt-4">Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
      <small>
        Feito por{" "}
        <a
          href="https://github.com/Santosl2"
          className="underline text-cyan-500 underline-offset-2"
        >
          Matheus Filype
        </a>
      </small>
    </div>
  );
}

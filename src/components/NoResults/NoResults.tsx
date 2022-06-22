import { Scroll } from "phosphor-react";

export function NoResults() {
  return (
    <div className="flex h-60 flex-col items-center justify-center rounded-lg border-t border-gray-400 text-gray-300">
      <Scroll size={56} />
      <strong className="mt-4">Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}

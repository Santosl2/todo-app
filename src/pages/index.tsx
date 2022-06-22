import { Item, MainForm, TextWithBadge } from "@/components";
import { Header } from "@/components/Header";
import { SEO } from "@/SEO";

export default function Home() {
  return (
    <>
      <SEO title="Teste" />
      <Header />
      <main className="mx-auto my-0 flex max-w-[46rem] flex-col px-2">
        <MainForm />

        <div className="mt-16 w-full">
          <div className="mb-6 flex justify-between">
            <TextWithBadge value="0" text="Tarefas criadas" />
            <TextWithBadge value="0 de 0" text="Tarefas concluídas" />
          </div>
          <Item id={7} text="Tarefas" />
          <Item id={7} text="Tarefas" />
          <Item id={7} text="Tarefas" />
          <Item id={7} text="Tarefas" />
          <Item id={7} text="Tarefas" />
        </div>
      </main>
    </>
  );
}

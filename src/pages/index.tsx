import { useMemo } from "react";

import { motion, LayoutGroup, Variants } from "framer-motion";

import { Item, MainForm, TextWithBadge } from "@/components";
import { Header } from "@/components/Header";
import { SEO } from "@/SEO";
import { useSelectorTodos } from "@/shared/hooks/useSelectorTodos";

const listVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
  hidden: {},
};
export default function Home() {
  const tasks = useSelectorTodos();

  const taskCreated = useMemo(() => tasks.length.toString(), [tasks]);

  const taskCompleted = useMemo(
    () => tasks.filter((t) => t.isCompleted).length.toString(),
    [tasks]
  );

  const sortTasksById = useMemo(
    () => tasks.map((t) => t).sort((a, b) => b.id - a.id),
    [tasks]
  );

  return (
    <>
      <SEO title="Teste" />
      <Header />
      <main className="mx-auto my-0 flex max-w-[46rem] flex-col px-2">
        <MainForm />

        <div className="mt-16 w-full">
          <div className="mb-6 flex justify-between">
            <TextWithBadge value={taskCreated} text="Tarefas criadas" />
            <TextWithBadge
              value={`${taskCompleted} de ${taskCreated}`}
              text="Tarefas concluídas"
            />
          </div>
          <LayoutGroup>
            {sortTasksById && (
              <motion.ul
                variants={listVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {sortTasksById.map((task) => (
                  <Item key={task.id} id={task.id} text={task.value} />
                ))}
              </motion.ul>
            )}
          </LayoutGroup>
        </div>
      </main>
    </>
  );
}

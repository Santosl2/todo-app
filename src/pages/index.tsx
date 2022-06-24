import { useMemo } from "react";

import { motion, Variants } from "framer-motion";

import { Item, MainForm, NoResults, TextWithBadge } from "@/components";
import { Header } from "@/components/Header";
import { SEO } from "@/SEO";
import { useSelectorTodos } from "@/shared/hooks/useSelectorTodos";

const mainVariants: Variants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

export default function Home() {
  const tasks = useSelectorTodos();

  const taskCreated = useMemo(() => tasks.length.toString(), [tasks]);

  const taskCompleted = useMemo(
    () => tasks.filter((t) => t.isCompleted).length.toString(),
    [tasks]
  );

  const sortTasksById = useMemo(
    () => [...tasks].sort((a, b) => b.id - a.id),
    [tasks]
  );

  return (
    <>
      <SEO
        title="Anote suas tarefas"
        description="Anote os seus a fazeres de forma rápida e simples!"
      />
      <Header />
      <motion.main
        animate="visible"
        initial="hidden"
        variants={mainVariants}
        className="mx-auto my-0 flex max-w-[46rem] flex-col px-2"
      >
        <MainForm />

        <div className="mt-16 w-full">
          <div className="mb-6 flex justify-between">
            <TextWithBadge value={taskCreated} text="Tarefas criadas" />
            <TextWithBadge
              value={taskCompleted}
              text="Tarefas concluídas"
              color="text-purple-300"
            />
          </div>
          {sortTasksById && (
            <ul>
              {sortTasksById.map((task) => (
                <Item key={task.id} id={task.id} text={task.value} />
              ))}
            </ul>
          )}
          {sortTasksById.length <= 0 && <NoResults />}
        </div>
      </motion.main>
    </>
  );
}

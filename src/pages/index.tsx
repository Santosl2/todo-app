import { motion, LayoutGroup, Variants } from "framer-motion";

import { Item, MainForm, TextWithBadge } from "@/components";
import { Header } from "@/components/Header";
import { SEO } from "@/SEO";

const listVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
  hidden: {},
};
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
          <LayoutGroup>
            <motion.ul
              variants={listVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <Item id={7} text="Tarefas" />
              <Item id={7} text="Tarefas" />
              <Item id={7} text="Tarefas" />
              <Item id={7} text="Tarefas" />
              <Item id={7} text="Tarefas" />
            </motion.ul>
          </LayoutGroup>
        </div>
      </main>
    </>
  );
}

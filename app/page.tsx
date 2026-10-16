import getBoards from "@/lib/data";
import Header from "../components/ui/Header";
import { Suspense } from "react";
import BoardCard from "@/components/ui/BoardCard";

export default async function Home() {
  const boards = await getBoards();
  console.log(boards);

  return (
    <Suspense fallback="{<div>Loading...</div>}">
      <div className="flex flex-col gap-2 h-full w-full min-h-0 bg-stone-dark font-sans rounded-xl p-4">
        <Header heading="All Boards" />

        <section className="flex-1 min-h-0 grid grid-cols-[repeat(auto-fit,250px)] auto-rows-min gap-4 overflow-y-auto">
          {boards.map((board) => (
            <BoardCard board={board} key={board.id} />
          ))}
        </section>
      </div>
    </Suspense>
  );
}

import { BoardWithCards } from "@/types";
import Link from "next/link";
import React from "react";

interface BoardCardProps {
  board: BoardWithCards;
}

const BoardCard = ({ board }: BoardCardProps) => {
  return (
    <Link href={`/boards/${board.id}`}>
      <div className="boardCard grid grid-rows-[auto_1fr_auto] gap-2 p-4 min-h-full  border border-stone-light rounded-lg">
        <h3 className="text-sm/5 font-semibold leading-none tracking-wide">
          {board.title}
        </h3>

        <p className="text-xs text-stone-300">
          <span className="text-xs text-stone-400">✨summary: </span>
          <span>{board.ai_summary}</span>
        </p>

        <div className="self-end flex justify-between items-center w-full gap-1 text-[9px] ">
          <div className="flex-1 whitespace-nowrap p-1 text-blue-300 border border-blue-400 bg-blue-300/15 rounded-md">
            Todo: 13
          </div>
          <div className="flex-1 whitespace-nowrap p-1 text-yellow-500 border border-yellow-400 bg-yellow-300/15 rounded-md">
            In Progress: 12
          </div>
          <div className="flex-1 whitespace-nowrap p-1 text-green-500 border border-green-400 bg-green-300/15 rounded-md">
            Completed: 12
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BoardCard;

import { BoardWithCards } from "@/types";
import { supabase } from "./supabase";
import { cacheLife, cacheTag } from "next/cache";

async function getBoards(boardId: string): Promise<BoardWithCards[]> {
  "use cache";
  cacheTag("boards");
  cacheLife("minutes"); // Serves cached data instantly, refreshes in background every few minutes

  const { data, error } = await supabase
    .from("cards")
    .select("*")
    .eq("board_id", boardId)
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Database Error:", error.message);
    throw new Error("Failed to fetch cards");
  }

  return (data as BoardWithCards[]) ?? [];
}

export default getBoards;

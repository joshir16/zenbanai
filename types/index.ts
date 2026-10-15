export type CardStatus = "todo" | "in-progress" | "done";
export type CardPriority = "low" | "medium" | "high";

export interface Board {
  id: string;
  created_at: string;
  title: string;
  ai_summary?: string | null;
  is_demo: boolean;
}

export interface Card {
  id: string;
  board_id: string;
  created_at: string;
  title: string;
  description: string;
  status: CardStatus;
  priority: CardPriority;
  tags?: string[] | null;
}

// import getCards from "@/lib/getCards";
import Header from "./Header";
import getBoards from "@/lib/getBoards";

export default async function BoardContent({
  params,
}: {
  params: Promise<{ boardSlug: string }>;
}) {
  const { boardSlug } = await params;

  const boards = await getBoards();

  const currentBoard = boards.filter((item) => item.id === boardSlug)[0];

  //   const cards = await getCards(boardSlug);

  return (
    <div className="h-full w-full bg-stone-dark font-sans rounded-xl p-2">
      <Header heading={currentBoard.title} total={currentBoard.cards?.length} />
    </div>
  );
}

import { Suspense } from "react";
import BoardContent from "@/components/ui/BoardContent";

export default async function page({
  params,
}: {
  params: Promise<{ boardSlug: string }>;
}) {
  return (
    <Suspense fallback={<div>Loading cards...</div>}>
      <BoardContent params={params} />
    </Suspense>
  );
}

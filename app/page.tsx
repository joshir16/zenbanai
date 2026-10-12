import Header from "../components/layout/Header";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 h-full w-full bg-stone-dark font-sans rounded-xl p-2">
      <Header />
      <section>content</section>
    </div>
  );
}

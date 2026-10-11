import Header from "./components/main/Header";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 h-full w-full font-sans rounded-xl">
      <Header />
      <section>content</section>
    </div>
  );
}

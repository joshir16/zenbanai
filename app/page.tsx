import Header from "../components/layout/Header";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 h-full w-full min-h-0 bg-stone-dark font-sans rounded-xl p-4">
      <Header />
      <section className="flex-1 min-h-0 grid grid-cols-[repeat(auto-fit,250px)] auto-rows-min gap-4 overflow-y-auto">
        <div className="boardCard  grid grid-rows-[auto_1fr_auto] gap-2 p-4 min-h-35 max-h-38  border border-stone-light rounded-lg">
          <h3 className="text-sm/5 font-semibold leading-none tracking-wide">
            React
          </h3>

          <p className="text-xs text-stone-300">
            summary: Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Impedit est rem illum? Lorem ipsum dolor sit amet..
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
      </section>
    </div>
  );
}

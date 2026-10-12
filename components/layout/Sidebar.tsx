import { LayoutDashboard, Plus } from "lucide-react";
import React from "react";
import Logo from "../ui/Logo";
import Copyright from "../ui/Copyright";

const Sidebar = () => {
  return (
    <div className="col-span-1 row-span-2 flex flex-col gap-8 h-full min-w-50 w-full bg-dark z-50">
      <Logo />

      <div className="border-b-[0.7] border-stone-600 p-2 pb-5">
        <button className="w-full h-full flex gap-2 items-center p-2 btn-active">
          <LayoutDashboard size={16} className="text-stone-400" />
          <p className="text-xs text-stone-400 tracking-widest">All Board</p>
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-5  p-2 ">
        <div className="flex flex-col gap-1  p-2 ">
          <label
            className="text-xs text-stone-400 tracking-widest "
            htmlFor="createboard"
          >
            Create new Board
          </label>
          <div className="flex justify-center items-center gap-2 p-1 text-sm w-full border-[0.7] border-stone-600 rounded-md">
            <Plus size={24} className="text-stone-300" />
            <input
              type="text"
              placeholder="New Board Title..."
              name="createboard"
              className="text-sm w-full outline-0 text-stone-400"
            />
          </div>
        </div>

        <nav className="flex-1 flex flex-col gap-2">
          <p className="flex justify-between items-center text-xs  px-2  text-stone-400 tracking-widest">
            Board List <span className="font-light">3</span>
          </p>

          <ul className="flex-1 flex flex-col gap-2 text-sm text-stone-300">
            <li className="flex justify-between items-center  p-2  border-b border-b-stone-mid hover:bg-stone-mid hover:rounded-lg">
              <span className="">React</span>
              <span className="font-light text-xs text-stone-400 ">
                3 cards
              </span>
            </li>
            <li className="flex justify-between items-center  p-2  border-b border-b-stone-mid hover:bg-stone-mid hover:rounded-lg">
              <span className="">React</span>
              <span className="font-light text-xs text-stone-400">3 cards</span>
            </li>
            <li className="flex justify-between items-center p-2 border-b border-b-stone-mid hover:bg-stone-mid hover:rounded-lg">
              <span className="">React</span>
              <span className="font-light text-xs text-stone-400">3 cards</span>
            </li>
            <li className="flex justify-between items-center p-2 border-b border-b-stone-mid hover:bg-stone-mid hover:rounded-lg">
              <span className="">React</span>
              <span className="font-light text-xs text-stone-400">3 cards</span>
            </li>
          </ul>
        </nav>
      </div>

      <Copyright />
    </div>
  );
};

export default Sidebar;

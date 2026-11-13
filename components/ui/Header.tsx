import React from "react";

const Header = ({ heading, total }: { heading: string; total: number }) => {
  return (
    <div className="">
      <h1 className="text-xl font-semibold tracking-wider">
        {heading} <span className="text-stone-light">({total})</span>
      </h1>
    </div>
  );
};

export default Header;

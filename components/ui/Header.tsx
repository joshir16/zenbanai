import React from "react";

const Header = ({ heading }: { heading: string }) => {
  return (
    <div className="">
      <h1 className="text-xl font-semibold tracking-wider">
        {heading} <span className="text-stone-light">(2)</span>
      </h1>
    </div>
  );
};

export default Header;

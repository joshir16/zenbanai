import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className="p-1 m-3">
      <h1 className="w-full text-center text-3xl font-bold tracking-tight">
        zenban <span className="text-green-light">ai</span>
      </h1>
    </Link>
  );
};

export default Logo;

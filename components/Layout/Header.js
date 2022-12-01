import React, { useState } from "react";
import Link from "next/link";
// import Image from "next/image";
// import iconLogo from "../../public/icon.svg";
import Navigation from "./navigation";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 left-0 z-10 py-0 px-6 bg-background flex items-center justify-between lg:px-14">
      <Link
        className="flex items-center justify-center"
        href="/"
        onClick={() => setMenuOpen(false)}
      >
        <img
          className="w-14 -my-2 lg:w-10 lg:my-0 relative z-20"
          src="/icon.svg"
          alt="CodeBusters logo"
        />
      </Link>
      <Navigation type="top" setMenuOpen={setMenuOpen} open={menuOpen} />
    </div>
  );
}

export default Header;

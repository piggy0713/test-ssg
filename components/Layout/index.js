import React, { useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import { useRouter } from "next/router";
import classNames from "../../src/utils/className";

const Layout = ({ children }) => {
  const { pathname } = useRouter();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <div
      className={classNames(
        pathname === "/" ? "bg-home" : "bg-others",
        "min-h-screen w-full bg-no-repeat bg-fixed text-default antialiased font-body text-body sm:text-body-sm lg:text-body-lg"
      )}
    >
      <Header />
      <div className="p-5 min-h-screen max-w-3xl mx-auto">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

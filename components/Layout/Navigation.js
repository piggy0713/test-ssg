import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SocialLink from "./SocialLink";
import HamburgerButton from "./HamburgerButton";
import { navData } from "../../src/assets/data/navigation";

function Navigation({ type, setMenuOpen, open }) {
  const { pathname } = useRouter();
  console.log("nav", navData);

  const menuItems = (classname) => {
    return navData.map((item, i) => {
      return (
        <li className={classname} key={i}>
          <Link
            className={`font-body ${
              pathname === item.link ? "text-greyLight" : "text-grey"
            } no-underline transition-all duration-300 ease-in-out hover:text-greyLight focus:text-greyLight active:text-default`}
            href={item.link}
            onClick={() => setMenuOpen(!open)}
          >
            {item.name}
          </Link>
        </li>
      );
    });
  };

  return (
    <>
      {type === "top" ? (
        <>
          <nav className="inline-block min-w-[35vw]">
            <ul
              className={`list-none list-outside absolute w-full h-screen m-0 p-8 uppercase text-1.5em ${
                open ? "top-0" : "-top-[200vh]"
              } left-0 z-10 bg-primary flex flex-col flex-nowrap justify-center items-center transition-[top] duration-500 delay-100 ease-out lg:my-1 lg:mx-auto lg:p-0 lg:visible lg:text-0.8em lg:relative lg:top-0 lg:w-auto lg:h-auto lg:flex-row lg:flex-nowrap lg:justify-end`}
            >
              {menuItems(
                "list-none inline-flex justify-start items-center my-8 mx-auto lg:my-auto lg:ml-0 lg:mr-8"
              )}
              <li className="list-none my-8 mx-auto inline-flex items-center lg:m-0">
                <SocialLink />
              </li>
            </ul>
          </nav>
          <HamburgerButton setMenuOpen={setMenuOpen} open={open} />
        </>
      ) : (
        <nav className="inline-block min-w-[35vw]">
          <ul className="my-1 mx-0 pl-0 uppercase flex flex-wrap items-center justify-center list-none lg:flex-nowrap">
            {menuItems(
              "list-none inline-flex justify-start items-center my-1 mx-2 lg:my-0 lg:ml-0 lg:mr-8"
            )}
            <li className="list-none my-1 mx-2 inline-flex items-center lg:m-0">
              <SocialLink />
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default Navigation;

import React from "react";
// import FullLogo from "../FullLogo";
import Navigation from "./navigation";

const Footer = () => {
  return (
    <footer className="min-h-screen text-center flex flex-col flex-nowrap justify-evenly items-center text-0.8em lg:text-footer-lg">
      <div>
        {/* <FullLogo isHeader={false} /> */}
        <div className="text-grey flex flex-col flex-nowrap items-center lg:flex-row lg:text-0.8em">
          <Navigation type="bottom" />
        </div>
        <small className="block text-greyDark mx-auto my-[1em]">
          © {new Date().getFullYear()} Codebusters, Inc.
        </small>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import Link from "next/link";
import classNames from "../src/utils/className";

const Hyperlink = ({ href, internal = false, classes = "", children }) => {
  const commonClasses =
    "text-secondaryLight font-bold border-b border-b-transparent duration-500 hover:border-b-secondaryLight";

  return internal ? (
    <Link href={href} className={classNames(commonClasses, classes)}>
      {children}
    </Link>
  ) : (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={classNames(commonClasses, classes)}
    >
      {children}
    </a>
  );
};

export default Hyperlink;

import React from "react";
import classNames from "../src/utils/className";

export default function Button({
  children,
  classes = "",
  type = "button",
  onClick,
  ...props
}) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "flex text-center text-accentLight ease-in-out duration-500 focus:bg-accentLight focus:text-default hover:bg-accentLight hover:text-default p-3.5 justify-center leading-4 my-8 lg:my-12 mx-auto uppercase font-bold border-3 border-solid border-accentLight bg-transparent",
        classes
      )}
      {...props}
      type={type}
    >
      {children}
    </button>
  );
}

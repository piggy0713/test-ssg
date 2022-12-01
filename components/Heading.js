import React from "react";
import classNames from "../src/utils/className";

const Heading = ({ level, children, classes = "" }) => {
  const commonClasses = "mx-auto text-center font-heading tracking-heading";
  switch (level) {
    case "h1":
      return (
        <h1
          className={classNames(
            commonClasses,
            "text-heading mt-16 mb-12 lg:mt-32 lg:mb-16",
            classes
          )}
        >
          {children}
        </h1>
      );
    case "h2":
    default:
      return (
        <h2
          className={classNames(
            commonClasses,
            "text-subheading mt-16 mb-10 lg:text-subheading-lg lg:mt-28 lg:mb-12",
            classes
          )}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={classNames(commonClasses, "text-xl mt-10 mb-8", classes)}
        >
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4 className={classNames(commonClasses, "text-lg mt-8 mb-6", classes)}>
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5
          className={classNames(
            commonClasses,
            "text-md mt-6 mb-bodyBottom",
            classes
          )}
        >
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6 className={classNames(commonClasses, "font-md", classes)}>
          {children}
        </h6>
      );
  }
};

export default Heading;

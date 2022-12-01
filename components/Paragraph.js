import React from "react";
import classNames from "../src/utils/className";

const Paragraph = ({ children, classes = "text-justify" }) => (
  <p className={classNames("max-w-3xl mx-auto mt-0 mb-bodyBottom", classes)}>
    {children}
  </p>
);

export default Paragraph;

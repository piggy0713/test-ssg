import React from "react";
import textData from "../src/assets/data/texts.json";

function FullLogo({ isHeader = false }) {
  const image = (
    <img
      className="w-[75vw] my-4 mx-auto sm:w-[50vw] lg:w-[35vw]"
      src="/logo.svg"
      alt="Codebusters log"
    />
  );

  if (isHeader) {
    return (
      <h1 className="text-center my-0 mx-auto font-heading text-heading mb-12">
        {image}
        <span className="block text-tagline font-heading -mt-8 sm:-mt-10 mx-auto text-center tracking-heading">
          {textData.home.mission.tagline}
        </span>
      </h1>
    );
  } else {
    return image;
  }
}

export default FullLogo;

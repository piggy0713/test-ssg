import React from "react";
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";

function SocialLink() {
  return (
    <ul className="flex flex-row flex-nowrap items-center my-0 mx-auto pl-0 list-none lg:inline-flex lg:m-0">
      <li className="list-none inline-block my-2 mx-6 lg:my-0 lg:ml-0 lg:mr-8">
        <a
          className="text-grey flex items-center transition-all duration-300 ease-in-out no-underline font-bold visited:text-grey hover:text-greyLight focus:text-greyLight active:text-default"
          href="https://github.com/codebusters-ca"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub aria-label="Github" />
        </a>
      </li>
      <li className="list-none inline-block my-2 mx-6 lg:my-0 lg:ml-0 lg:mr-8">
        <a
          className="text-grey flex items-center transition-all duration-300 ease-in-out no-underline font-bold visited:text-grey hover:text-greyLight focus:text-greyLight active:text-default"
          href="https://www.linkedin.com/company/codebusters-ca/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn aria-label="LinkedIn" />
        </a>
      </li>
      <li className="list-none inline-block my-2 mx-6 lg:m-0">
        <a
          className="text-grey flex items-center transition-all duration-300 ease-in-out no-underline font-bold visited:text-grey hover:text-greyLight focus:text-greyLight active:text-default"
          href="https://twitter.com/codebustersca"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter aria-label="Twitter" />
        </a>
      </li>
    </ul>
  );
}

export default SocialLink;

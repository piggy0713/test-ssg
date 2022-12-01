import React from "react";

const hamburgerButton = ({ setMenuOpen, open }) => {
  return (
    <button
      className="w-10 h-10 justify-self-end bg-transparent border-none m-0 p-0 cursor-pointer relative z-20 flex items-center justify-center lg:hidden"
      aria-label="Toggle Menu"
      onClick={() => setMenuOpen(!open)}
    >
      <div
        className={`${
          open ? "rotate-45" : "rotate-0"
        } block w-burger-width h-burger-height rounded-sm bg-greyLight transition-all duration-300 ease-in-out before:block before:w-burger-width before:h-burger-height before:rounded-sm before:bg-greyLight before:transition-all before:duration-300 before:ease-in-out after:block after:w-burger-width after:h-burger-height after:rounded-sm after:bg-greyLight after:transition-all after:duration-300 after:ease-in-out ${
          open
            ? "before:-rotate-90 before:translate-x-0 before:translate-y-0 after:scale-[0.01] after:translate-x-0 after:translate-y-0"
            : "before:rotate-0 before:translate-x-0 before:-translate-y-[8px] after:scale-100 after:translate-x-0 after:translate-y-[5px]"
        } hover:bg-greyLight focus:bg-greyLight hover:before:bg-greyLight focus:before:bg-greyLight hover:after:bg-greyLight focus:after:bg-greyLight`}
      ></div>
    </button>
  );
};

export default hamburgerButton;

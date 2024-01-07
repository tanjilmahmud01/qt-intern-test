import React from "react";
import { Dropdown } from "flowbite-react";
import { Flowbite } from "flowbite-react";

const customTheme = {
  Dropdown: {
    item: {
      base: "flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer w-full hover:bg-blue-100 focus:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 focus:outline-none dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white",
    },
  },
};

const DropdownMenuFlowbite = () => {
  return (
    <div>
      <Flowbite theme={{ theme: customTheme }}>
        <Dropdown label="Dropdown button" dismissOnClick={false}>
          <Dropdown.Item className="bg-blue-500 hover:bg-red-500 active:bg-red-500 text-white">
            Dashboard
          </Dropdown.Item>
          <Dropdown.Item className="bg-blue-500 hover:bg-red-500 active:bg-red-500 text-white">
            Settings
          </Dropdown.Item>
          <Dropdown.Item className="bg-blue-500 hover:bg-red-500 active:bg-red-500 text-white">
            Earnings
          </Dropdown.Item>
          <Dropdown.Item className="bg-blue-500 hover:bg-red-500 active:bg-red-500 text-white">
            Sign out
          </Dropdown.Item>
        </Dropdown>
      </Flowbite>
    </div>
  );
};

export default DropdownMenuFlowbite;

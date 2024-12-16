import React from "react";

const MenuIcon = ({ color }: { color: string }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="align-justified">
        <path
          id="Path"
          d="M4 6H20"
          stroke={color || "#1B1F26"}
          stroke-opacity="0.72"
          stroke-width="1.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Path_2"
          d="M4 12H20"
          stroke={color || "#1B1F26"}
          stroke-opacity="0.72"
          stroke-width="1.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Path_3"
          d="M4 18H16"
          stroke={color || "#1B1F26"}
          stroke-opacity="0.72"
          stroke-width="1.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};

export default MenuIcon;
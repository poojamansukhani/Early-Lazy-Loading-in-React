import React from "react";
export const Header = (props) => {
  return (
    <div>
      <h1 className="bg-dark text-warning text-center">SPA {props.name}</h1>
    </div>
  );
};

import React from "react";
import { useLocation } from "react-router-dom";
import CurrencyList from "../27-context-api/currency-list";

const Header = () => {
  const location = useLocation();

  console.log(location);
  const title = location.pathname === "/hello" ? <span>Hello</span> : " ";
  return (
    <div className="p-4 bg-info text-center">
      <h1>{title}React Practices</h1>
      <CurrencyList />
    </div>
  );
};

export default Header;

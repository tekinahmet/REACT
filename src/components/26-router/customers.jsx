import React from "react";
import { Link } from "react-router-dom";

const Customers = () => {
  return (
    <div>
      <Link to="/routing/45">John Doe</Link>
      <br />
      <Link to="/routing/23">Barbara Stone</Link>
      <hr/>
      <Link to="/routing/usenavigate" target="_blank">Use Navigate</Link>
    </div>
  );
};

export default Customers;

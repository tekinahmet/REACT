import React from "react";
const Jsx4 = () => {
  // Component icinde klasik IF kullanimi
  // Bu IF return icinde kullanilamaz
  const isAdmin = false;
  let content = "";
  if (!isAdmin) {
    content = <h2>Admin User</h2>;
  } else {
    content = <h3>Customer User</h3>;
  }
  return <div>{content}</div>;
};
export default Jsx4;

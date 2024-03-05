import React from "react";
const Jsx5 = () => {
  // Component icinde klasik IF kullanimi
  // Bu IF return icinde kullanilamaz
  const isAdmin = false;
  const customers = [];
  return (
    <div>
      {isAdmin ? <h2>Admin User</h2> : <h3>Customer User</h3>}
      <p>{customers.length ? <h2>Hello</h2> : null}</p>
    </div>
  );
};
export default Jsx5;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const UseNavigate = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 10000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div>
      <h4>You are redirecting to another page after 10 seconds</h4>
    </div>
  );
};
export default UseNavigate;

import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex flex-column bg-light p-10 d-flex flex-column justify-content-center align-items-center" style={{minHeight: "92.5vh"}}>
    <main className="">
    <h1 className="font-bold text-dark text-center display-1">404</h1>
    <p className="text-secondary mt-2">
      The page you are looking for does not exist.
    </p>
    <Link
      to="/"
      className="text-secondary font-semibold mt-5 hover:text-primary hover-bg-primary rounded-lg py-2 px-5" style={{textAlign:"center"}}>
      <p>Go to Home</p>
    </Link>
  </main>
  </div>  
  );
};

export default NotFound;

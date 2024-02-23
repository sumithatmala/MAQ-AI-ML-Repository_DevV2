import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-vh-100 d-flex flex-column bg-light p-10 h-[calc(100% - 4em)] d-flex flex-column justify-content-center align-items-center" style={{height: "0px"}}>
    <main className="">
    <h1 className="font-bold text-dark text-center display-1">404</h1>
    <p className="text-secondary mt-2">
      The page you are looking for does not exist.
    </p>
    <Link
      to="/"
      className="text-secondary font-semibold mt-5 hover:text-primary hover-bg-primary rounded-lg py-2 px-5">
      <span>Go to Home</span>
    </Link>
  </main>
  </div>  
  );
};

export default NotFound;

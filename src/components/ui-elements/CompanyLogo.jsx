import { Link } from "react-router-dom";
import companyLogo from "./MAQ-Software-Logo.svg";

export const CompanyLogo = () => {
  return (
    <Link to="./home" className="Navbar-brand mb-0 h1">
      <img
        src={companyLogo}
        alt="Company Logo"
        style={{
          width: "10rem",
          height: "3rem",
          alignContent: "center",
        }}
        className="d-inline-block align-top"
      />
    </Link>
  );
};

export default CompanyLogo;

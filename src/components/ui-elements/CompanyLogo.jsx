import { Link } from "react-router-dom";
import companyLogo from "./MAQ-Software-Logo.svg";

export const CompanyLogo = () => {
  return (
    <Link to="./home" className="Navbar-brand mb-0 h1">
      <img
        src={companyLogo}
        alt="Company Logo"
        style={{
          width: "12.5rem",
          height: "5rem",
          alignContent: "center",
        }}
        className="d-inline-block align-top"
      />
    </Link>
  );
};

export default CompanyLogo;

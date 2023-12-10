import { Link } from "react-router-dom";
import companyLogo from "./maqLogoHigh.png";

export const CompanyLogo = () => {
  return (
    <Link 
    to = "/" 
    className="Navbar-brand mb-0 h1"
    >
      <img
        src={companyLogo}
        alt="Company Logo"
        style={{ height: '10 rem', width: '10rem', alignContent: "center", padding : '15px 5px 5px 5px' }}
        className="d-inline-block align-top"
      />
    </Link>
  );
};


export default CompanyLogo
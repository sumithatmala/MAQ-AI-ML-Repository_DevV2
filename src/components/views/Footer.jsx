import React from "react";
 
const Footer = () => {

  const currentYear = new Date().getFullYear();

    return(
        <>
           <footer className="w-100 bg-light text-center footer" style={{marginTop:"auto",
           display:"grid",
           alignItems:"center",
  padding:"20px"}}>
            <p style={{marginBottom:"0px"}}> © {currentYear} MAQ Software. All Rights Reserved. <a href="https://maqsoftware.com/privacystatement" className="link"  >
              Privacy Statement
            </a> <a href="https://maqsoftware.com/termsofservice" className="link" >
              Terms of Service
            </a></p>
 
            </footer>
        </>
    )
};
 
export default Footer;
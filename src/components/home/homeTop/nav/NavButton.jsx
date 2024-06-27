   import { Link } from "react-router-dom";

   const NavButton = ({ linkButton }) => {
    return <Link to={linkButton.url}>{linkButton.link}</Link>;
  };
  
  export default NavButton;
  
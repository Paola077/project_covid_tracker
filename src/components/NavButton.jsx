   const NavButton = ({ linkButton }) => {
    return <a href={linkButton.url}>{linkButton.link}</a>;
  };
  
  export default NavButton;
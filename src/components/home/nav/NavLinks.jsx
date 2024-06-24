import NavButton from './NavButton.jsx';
import "./nav.css"

const list = [
  { link: "Home", url: "/" },
  { link: "Prevention", url: "#" },
  { link: "Qurantine", url: "#" },
  { link: "Pages", url: "#" },
  { link: "About", url: "#" },
  { link: "Help", url: "#" },
  { link: "Tracker", url: "/dashboard" }
];

const NavLinks = () => {
  const aList = list.map((link) => (
    <NavButton key={link.link} linkButton={link}/>
  ));
  
  return (
    <nav>
      <img src="src/assets/img/logo-white.png" id="logoCovid" alt="Logo"/>
      {aList}
    </nav>
  );
};
export default NavLinks;


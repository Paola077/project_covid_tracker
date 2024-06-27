import NavButton from './NavButton.jsx';
import "./nav.css"
import LogoWhite from '../../LogoWhite/LogoWhite.jsx';

const list = [
  { link: "Home", url: "/" },
  { link: "Prevention", url: "#" },
  { link: "Qurantine", url: "#" },
  { link: "Pages", url: "#" },
  { link: "About", url: "#" },
  { link: "Help", url: "#" },
  { link: "Tracker", url: "/dashboard/tracker1" }
];

const NavLinks = () => {
  const aList = list.map((link) => (
    <NavButton key={link.link} linkButton={link}/>
  ));
  
  return (
    <nav>
      <LogoWhite />
      {aList}
    </nav>
  );
};
export default NavLinks;


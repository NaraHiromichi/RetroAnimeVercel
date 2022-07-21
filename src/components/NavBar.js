import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <Link style={{ textDecoration: "none" }} to="/">
        <h3 className="LOGO">Old School Anime MM</h3>
      </Link>
    </nav>
  );
};

export default NavBar;

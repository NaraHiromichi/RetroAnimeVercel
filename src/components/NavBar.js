import { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../DataContext";
const NavBar = () => {
  const { homeRef } = useContext(DataContext);
  return (
    <nav ref={homeRef}>
      <Link style={{ textDecoration: "none" }} to="/">
        <h3 className="LOGO">Retroanime</h3>
      </Link>
    </nav>
  );
};

export default NavBar;

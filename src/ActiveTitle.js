import { useLocation } from "react-router-dom";

const ActiveTitle = () => {
  const location = useLocation();
  let title = "";
  switch (location.pathname) {
    default:
      title = "Info";
      break;
    case "/":
      title = "Home";
      break;
    case "/search":
      title = "Search";
      break;
    case "/genres":
      title = "Showing By Genres";
      break;
  }
  return <h4 className="activeTitle">{title}</h4>;
};

export default ActiveTitle;

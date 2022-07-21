import { useContext } from "react";
import DataContext from "../DataContext";
import "./spinner.css";

const LoadingSpinner = () => {
  const { theme } = useContext(DataContext);
  return (
    <div className="spinner-container" spinner-theme={theme}>
      <div className="loading-spinner"></div>
    </div>
  );
};

export default LoadingSpinner;

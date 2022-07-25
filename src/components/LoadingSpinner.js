import { useContext, useEffect, useState } from "react";
import DataContext from "../DataContext";
import "./spinner.css";

const LoadingSpinner = () => {
  const [needToRefresh, setNeedtoRefresh] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setNeedtoRefresh(true);
    }, 7000);
    return () => {
      clearTimeout(timer);
    };
  });
  const { theme } = useContext(DataContext);
  return (
    <>
      <div className="spinner-container" spinner-theme={theme}>
        <div className="loading-spinner"></div>
      </div>
      {needToRefresh === true && (
        <p>Connections slow or api request failed! Please Refresh Again!</p>
      )}
    </>
  );
};

export default LoadingSpinner;

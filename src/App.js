import { useContext } from "react";
import MainContainer from "./components/Home/MainContainer";
import NavToast from "./components/NavToast/NavToast";
import PhoneContainer from "./components/Phone/PhoneContainer";
import SearchBar from "./components/Phone/SearchBar";
import DataContext from "./DataContext";

function App() {
  const { theme } = useContext(DataContext);
  console.log(theme);
  return (
    <div className="App" data-theme={theme}>
      <MainContainer />
      <PhoneContainer />
      <NavToast />
    </div>
  );
}

export default App;

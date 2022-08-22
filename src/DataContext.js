import axios from "axios";
import { createContext, useEffect, useRef, useState } from "react";
import useLocalStorage from "use-local-storage";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const ref = useRef(null);

  return (
    <DataContext.Provider
      value={{
        ref,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;

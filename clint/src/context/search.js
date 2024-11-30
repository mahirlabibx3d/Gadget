import { useState, useContext, createContext } from "react";
import Layout from "../components/Layout"; // Ensure only this or equivalent is present.

const Layout = () => <div>Some Component</div>;
const SearchContext = createContext();
const SearchProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    keyword: "",
    results: [],
  });

  return (
    <SearchContext.Provider value={[auth, setAuth]}>
      {children}
    </SearchContext.Provider>
  );
};

// custom hook
const useSearch = () => useContext(SearchContext);

export { useSearch, SearchProvider };

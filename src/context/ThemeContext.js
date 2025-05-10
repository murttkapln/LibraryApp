// Theme Context
import { Children, createContext } from "react";

//! 1- ThemeContext'i olusturuldu
const ThemeContext = createContext();

//! 2- Sarmalayici {Provider} Component
const ThemeContextProvider = ({ Children }) => {
  //!  Local State
  const [myTheme, setMyTheme] = useState("light");
  const values = {
    myTheme,
    setMyTheme,
  };
  return <ThemeContextProvider value={values}>{Children}</ThemeContextProvider>;
};

//! 3- consuming custom hook
export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export default ThemeContextProvider;

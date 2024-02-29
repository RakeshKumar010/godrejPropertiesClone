import Loyout from "./Layout/Loyout";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { createContext, useRef } from "react";
AOS.init();
export const MyContext = createContext();
const App = () => {
  const overview = useRef(null);
  const location = useRef(null);
  const plans = useRef(null);
  const price = useRef(null);
  const amenities = useRef(null);
  const gallery = useRef(null);
  const download = useRef(null);
  const alsolike = useRef(null);
  const exphome=useRef(null)

  return (
    <MyContext.Provider value={{overview,location,plans,price,amenities,gallery,download,alsolike,exphome}}>
      <Loyout />
    </MyContext.Provider>
  );
};

export default App;

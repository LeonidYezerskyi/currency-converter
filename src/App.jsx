import { useState, useEffect } from "react";

import Header from "./components/Header";
import Converter from "./components/Converter";
import { fetchRates } from "./helpers/fetchRates";

const App = () => {
  const [rates, setRates] = useState({});

  useEffect(() => {
    const getRates = async () => {
      try {
        const data = await fetchRates();
        setRates(data);
      } catch (error) {
        console.error("Failed to fetch rates:", error);
      }
    };
    getRates();
  }, []);

  return (
    <div className="flex flex-col mx-auto p-4 bg-lime-300 rounded-md border-2 border-black max-w-[500px]">
      <Header rates={rates} />
      <Converter rates={rates} />
    </div>
  );
};

export default App;

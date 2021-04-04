import React, { useState } from "react";
import AppView from "./App.view";
import { requestCatFacts } from "../utilities/api";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [catData, setCatData] = useState([]);
  const [fetchError, setFetchError] = useState(false);

  const handleGetData = () => {
    requestCatFacts()
      .then((data) => {
        setCatData(data);
        setIsLoading(false);
        setFetchError(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setFetchError(true);
        console.error(e);
      });
  };

  return (
    <AppView
      isLoading={isLoading}
      catData={catData}
      setCatData={setCatData}
      handleGetData={handleGetData}
      fetchError={fetchError}
    />
  );
};

export default App;

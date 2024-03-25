import React, { useEffect, useState } from "react";
import AppRouter from "./router";
import StoreContext from "./store";
import ErrorMessage from "./components/00-common/error";
import Loading from "./components/00-common/loading";
import useCurrencies from "./components/00-common/usecurrencies";

const App = () => {
  const { currencies, loading, error } = useCurrencies();
  if (error) return <ErrorMessage>{error.message}</ErrorMessage>;
  if (loading) return <Loading />;
  return (
    <StoreContext.Provider value={{ currencies }}>
      <AppRouter />
    </StoreContext.Provider>
  );
};

export default App;

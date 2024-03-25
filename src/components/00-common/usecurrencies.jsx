import React, { useEffect, useState } from "react";

const useCurrencies = () => {
  const [currencies, setCurrencies] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCurrencies = async () => {
      try {
        const res = await fetch("https://www.frankfurter.app/latest?from=TRY");
        const data = await res.json();
        setCurrencies(data.rates);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadCurrencies();
  }, []);

  return { currencies, loading, error };
};

export default useCurrencies;

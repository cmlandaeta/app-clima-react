import { useState, useEffect } from "react";
import { fetchData } from "../helpers/fetchData";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    if (!url) return;

    const getData = async () => {
      setIsLoading(true);
      const result = await fetchData(url);
      setData(result.data);
      setIsLoading(result.isLoading);
      setErrors(result.errors);
    };

    getData();
  }, [url]);

  return { data, isLoading, errors };
};

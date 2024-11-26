import { useEffect, useState } from "react";

import { fetchData } from "../helpers/fetchData";

export const useFetch = (url, endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [errors, setErrors] = useState(null);

  const getData = async () => {
    const { data, isLoading, errors } = await fetchData(url, endpoint);

    setData(data);
    setIsloading(isLoading);
    setErrors(errors);
  };

  useEffect(() => {
    getData();
  }, [url]);

  return { data, isLoading, errors };
};

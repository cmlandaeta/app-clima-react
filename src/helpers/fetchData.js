import { useEffect, useState } from "react";

export const fetchData = (url, endpoint) => {
  const [state, setState] = useState({
    data: null,
    isLoading: false,
    errors: null,
  });

  const { data, isLoading, errors } = state;

  const getFetch = async () => {
    if (!url) return;

    try {
      const response = await fetch(url);
      const data = await response.json();

      setState({ data, isLoading: false, errors: null });
    } catch (error) {
      setState({ data: null, isLoading: false, errors: error });
    }
  };

  useEffect(() => {
    getFetch();
  }, [url, endpoint]);

  return {
    data,
    isLoading,
    errors,
  };
};

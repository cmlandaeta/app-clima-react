export const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return { data, isLoading: false, errors: null };
  } catch (error) {
    return { data: null, isLoading: false, errors: error.message };
  }
};

export const kelvinCent = (grados) => {
  return parseInt(grados - 273.15);
};

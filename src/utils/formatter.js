const useFormatter = () => {
  const apiUrl = import.meta.env.VITE_APP_API_URL;

  const getImageUrl = (imagePath) => {
    return `${apiUrl}/assets${imagePath}`;
  };

  const formatNumberWithCommas = (number) => {
    let numberStr = number.toString();

    let [integerPart, decimalPart] = numberStr.split(".");

    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    if (decimalPart !== undefined) {
      return `${integerPart}.${decimalPart}`;
    } else {
      return integerPart;
    }
  };

  return { getImageUrl, formatNumberWithCommas };
};

export default useFormatter;

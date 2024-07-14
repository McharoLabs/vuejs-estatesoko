const useUrlFormatter = () => {
  const apiUrl = import.meta.env.VITE_APP_API_URL;

  const getImageUrl = (imagePath) => {
    return `${apiUrl}/assets${imagePath}`;
  };

  return { getImageUrl };
};

export default useUrlFormatter;

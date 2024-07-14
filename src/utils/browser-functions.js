const useBrowserFunction = () => {
  const refreshPage = () => {
    window.location.reload();
  };

  return { refreshPage };
};

export default useBrowserFunction;

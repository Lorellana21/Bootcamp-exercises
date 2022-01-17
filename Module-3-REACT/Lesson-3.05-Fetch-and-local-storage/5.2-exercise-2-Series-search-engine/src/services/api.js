const callToApi = (searchSerie) => {
  // Llamamos al API
  return fetch(`https://api.tvmaze.com/search/shows?q=${searchSerie}`)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      return response;
    });
};

export default callToApi;

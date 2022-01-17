const callToApi = () => {
  // Llamamos al API
  return fetch("https://api.tvmaze.com/search/shows?q=paranormal") // Este 5 es el id de Leia Skywalker
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
};

export default callToApi;

import React from "react";

const loadPostApi = async () =>
  // await axios.get('https://jsonplaceholder.typicode.com/todos');

  await axios.get("https://www.omdbapi.com/?i=tt0369610&apikey=900505d8");

const Apinew = () => {
  return loadPostApi;
};

export default Apinew;

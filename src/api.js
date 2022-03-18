import axios from "axios";

export const loadPostApi = async () =>
  await axios.get("https://www.omdbapi.com/?i=tt0107290&apikey=900505d8");

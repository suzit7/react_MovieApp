import { apiCallReducers, moviedetailsreducers } from "./moviereducers";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  apiCallReducers,
  moviedetailsreducers,
});

export default rootReducers;

import { createStore, applyMiddleware } from "redux";
import rootReducers from "./reducers";
import createSagaMiddleware from 'redux-saga';   
import { onLoadPost } from "./sagas/Saga";


 const sagaMiddleware = createSagaMiddleware();  


const store = createStore(rootReducers , applyMiddleware(sagaMiddleware), );    



sagaMiddleware.run(onLoadPost)

export default store;





import { createStore  } from "redux";
import rootReducer from './reducer/index.reducer';

const store=(initialState)=>{
  return createStore(
    rootReducer,
    initialState
  );
}

export default store;
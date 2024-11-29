import { configureStore } from "@reduxjs/toolkit";
import zillowReducer from "./slice/zillowSlice";
import visitCountReducer from "./slice/visitCountSlice"
import photoReducer from "./slice/photoSlice";

const store = configureStore({
  reducer: {
    zillow: zillowReducer,
    visitCount: visitCountReducer,
    photo: photoReducer,
  },
}); 

export default store;
import { configureStore } from "@reduxjs/toolkit";
import zillowReducer from "./slice/zillowSlice";
import visitCountReducer from "./slice/visitCountSlice"
import photoReducer from "./slice/photoSlice";
import { userReducer } from "./slice/userSlice";

const store = configureStore({
  reducer: {
    zillow: zillowReducer,
    visitCount: visitCountReducer,
    photo: photoReducer,
    user: userReducer,
  },
}); 

export default store;
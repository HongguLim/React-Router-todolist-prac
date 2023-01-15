import { configureStore } from "@reduxjs/toolkit";
import todos from "../modules/todos";

const store = configureStore({
  reducer: {
    todos,
  },
});

// 3. export
export default store;

import { UserInterface } from "@src/models";
import { configureStore } from "@reduxjs/toolkit";
import UserSliceReducer from "./states/user";

export interface StoreInterface {
  user: UserInterface;
}

export default configureStore<StoreInterface>({
  reducer: {
    user: UserSliceReducer,
  },
});

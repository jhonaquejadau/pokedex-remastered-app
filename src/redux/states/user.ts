import { createSlice } from "@reduxjs/toolkit";
import { UserInterface } from "@/models";

export const EmptyUserState: UserInterface = {
  token: "",
  name: "",
  nickname: "",
  email: "",
};

//Persist user data in localstorage
const persistLocalStorageUser = (userInfo: UserInterface) => {
  localStorage.setItem("user", JSON.stringify({ ...userInfo }));
};

const clearLocalStorageUser = () => {
  localStorage.removeItem("user");
};

const localStorageUser = localStorage.getItem("user");

export const userSlice = createSlice({
  name: "user",
  initialState: localStorageUser ? JSON.parse(localStorageUser as string) : EmptyUserState,
  reducers: {
    createUser: (state, action) => {
      persistLocalStorageUser(action.payload)
      return action.payload
    },
    updateUser: (state, action) => {
      const result = { ...state, ...action.payload } 
      persistLocalStorageUser(result)
      return result
    },
    resetUser: () => {
      clearLocalStorageUser()
      return EmptyUserState
    },
  },
});

export const { createUser, updateUser, resetUser } = userSlice.actions;
export default userSlice.reducer;

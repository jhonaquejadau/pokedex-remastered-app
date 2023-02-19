import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";

export const getUserInfo = async (user_credential: any) => {
  return await getDocs(collection(db, "users")).then((results) => {
    const userInfo = results.docs
      .map((doc) => doc.data())
      .filter((doc) => doc.token === user_credential.user.uid);
    return { name: userInfo[0].name, nickname: userInfo[0].nickname };
  });
};

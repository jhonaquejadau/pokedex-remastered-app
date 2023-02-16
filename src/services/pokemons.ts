import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";

export const getPokemonsData = async (id_document: string) => {
  return await getDoc(doc(db, "pokemons", id_document)).then(
    (querySnapshot) => {
      return querySnapshot.data();
    }
  );
};

export const part_one = getPokemonsData("Wk3Q6XDrYVsvVa557HYG")

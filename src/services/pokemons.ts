import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";

export const getPokemonsData = async (id_document: string) => {
  return await getDoc(doc(db, "pokemons", id_document)).then(
    (querySnapshot) => {
      return querySnapshot.data();
    }
  );
};

const pokemons_part_one: any = await getPokemonsData(
  "Wk3Q6XDrYVsvVa557HYG"
);

const pokemons_part_two: any = await getPokemonsData(
  "r0Y5v56I0qMV1CKHoPs2"
);

export const pokemons_data = JSON.parse(pokemons_part_one.part_one).concat(
  JSON.parse(pokemons_part_two.part_two)
);

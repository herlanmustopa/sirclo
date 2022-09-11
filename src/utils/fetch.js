import axios from "axios";

export const DATA_POKE = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

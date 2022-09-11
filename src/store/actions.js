import { DATA_POKE } from "../utils/fetch";

export const getDataPke = () => {
  const path = "/pokemon";
  return DATA_POKE.get(path)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};
export const getDataType = (id) => {
  const path = `pokemon/${id}`;
  return DATA_POKE.get(path)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};

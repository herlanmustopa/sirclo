import { data_types } from "../action-types";

const initialState = {
  data: [],
  isFetching: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case data_types.GET_DATA_POKEMON:
      return {
        ...state,
        data: action.payload,
        isFetching: true,
      };
    default:
      return state;
  }
};

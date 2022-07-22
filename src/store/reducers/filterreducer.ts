import {
  FilterState,
  FilterAction,
  FilterActionTypes,
} from "../../types/filter";

const initialState: FilterState = {
  minPrice: 0,
  maxPrice: 1000000,
  gosts: [],
};

const filterReducer = (
  state = initialState,
  action: FilterAction
): FilterState => {
  switch (action.type) {
    case FilterActionTypes.UPDATE_PRODUCT_MIN_PRICE:
      return { ...state, minPrice: action.minPrice };
    case FilterActionTypes.UPDATE_PRODUCT_MAX_PRICE:
      return { ...state, maxPrice: action.maxPrice };
    case FilterActionTypes.SET_PRODUCT_GOST_FILTER:
      state.gosts.push(action.gost);
      return { ...state };
    case FilterActionTypes.REMOVE_PRODUCT_GOST_FILTER:
      state.gosts.forEach((g, index) => {
        if (g === action.gost) {
          state.gosts.splice(index, 1);
        }
      });
      return { ...state };
    default:
      return state;
  }
};

export default filterReducer;

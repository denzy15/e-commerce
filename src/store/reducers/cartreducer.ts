import { CartState, CartAction, CartActionTypes } from "./../../types/cart";
const initialState: CartState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action: CartAction): CartState => {
  switch (action.type) {
    case CartActionTypes.REMOVE_CART_ITEM:
      state.cartItems.map((x, index) =>
        x.id === action.id ? state.cartItems.splice(index, 1) : x
      );
      return { ...state };
    case CartActionTypes.DELETE_ALL_CART_ITEMS:
      return { ...state, cartItems: [] };
    case CartActionTypes.SET_CART_ITEMS:
      return { ...state, cartItems: action.cartItems };
    default:
      return state;
  }
};

export default cartReducer;

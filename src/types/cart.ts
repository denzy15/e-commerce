export enum CartActionTypes {
  REMOVE_CART_ITEM = "DELETE_CART_ITEM",
  DELETE_ALL_CART_ITEMS = "DELETE_ALL_CART_ITEMS",
  SET_CART_ITEMS = "SET_CART_ITEMS",
}

interface RemoveCartItem {
  type: CartActionTypes.REMOVE_CART_ITEM;
  id: number;
}

interface DeleteAllCartItems {
  type: CartActionTypes.DELETE_ALL_CART_ITEMS;
}

interface SetCartitems {
  type: CartActionTypes.SET_CART_ITEMS;
  cartItems: any[];
}

export type CartAction = RemoveCartItem | DeleteAllCartItems | SetCartitems;

export interface CartState {
  cartItems: any[];
}

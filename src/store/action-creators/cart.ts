import { CartActionTypes } from "../../types/cart"


export const RemoveCartItem = (id:number) => {
	return {
		type: CartActionTypes.REMOVE_CART_ITEM,
		id: id
	}
}

export const DeleteAllCartItems = () => {
	return {
		type: CartActionTypes.DELETE_ALL_CART_ITEMS
	}
}

export const SetCartItems = (cartItems: any[]) =>{
	return {
		type: CartActionTypes.SET_CART_ITEMS,
		cartItems
	}
}
import { FilterActionTypes } from './../../types/filter';
export const updateProductMinPrice = (num: number) => {
	return {
		type: FilterActionTypes.UPDATE_PRODUCT_MIN_PRICE,
		minPrice: num
	}
}
export const updateProductMaxPrice = (num: number) => {
	return {
		type: FilterActionTypes.UPDATE_PRODUCT_MAX_PRICE,
		maxPrice: num
	}
}
export const setProductGostFilter = (gost: string) => {
	return {
		type: FilterActionTypes.SET_PRODUCT_GOST_FILTER,
		gost: gost
	}
}
export const removeProductGostFilter = (gost: string) => {
	return {
		type: FilterActionTypes.REMOVE_PRODUCT_GOST_FILTER,
		gost: gost
	}
}
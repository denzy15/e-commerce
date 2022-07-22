import { ProductActionTypes } from '../../types/product';

export const updateProductId = (id : number) => {
	return {
		type: ProductActionTypes.UPDATE_PRODUCT_ID,
		id: id
	}
}
export const updateProductName = (name : string) => {
	return {
		type: ProductActionTypes.UPDATE_PRODUCT_NAME,
		name: name
	}
}
export const updateProductType = (type : string) => {
	return {
		type: ProductActionTypes.UPDATE_PRODUCT_TYPE,
		prodType: type
	}
}
export const updateProductPrice = (price : number) => {
	return {
		type: ProductActionTypes.UPDATE_PRODUCT_PRICE,
		price: price
	}
}
export const updateProductGost = (gost : string) => {
	return {
		type: ProductActionTypes.UPDATE_PRODUCT_GOST,
		gost: gost
	}
}

export const setProductImage = (image: File) => {
	return {
		type: ProductActionTypes.SET_PRODUCT_IMAGE,
		image: image
	}
}
export const setProduct = () => {
	return {
		type: ProductActionTypes.SET_PRODUCT
	}
}
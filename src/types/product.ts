export enum ProductActionTypes {
  UPDATE_PRODUCT_ID = "UPDATE_PRODUCT_ID",
  UPDATE_PRODUCT_NAME = "UPDATE_PRODUCT_NAME",
  UPDATE_PRODUCT_TYPE = "UPDATE_PRODUCT_TYPE",
  UPDATE_PRODUCT_PRICE = "UPDATE_PRODUCT_PRICE",
  UPDATE_PRODUCT_GOST = "UPDATE_PRODUCT_GOST",
  SET_PRODUCT_IMAGE = "SET_PRODUCT_IMAGE",
  SET_PRODUCT = "SET_PRODUCT",
}

interface updateProductId {
  type: ProductActionTypes.UPDATE_PRODUCT_ID;
  id: number;
}
interface updateProductName {
  type: ProductActionTypes.UPDATE_PRODUCT_NAME;
  name: string;
}
interface updateProductType {
  type: ProductActionTypes.UPDATE_PRODUCT_TYPE;
  prodType: string;
}
interface updateProductPrice {
  type: ProductActionTypes.UPDATE_PRODUCT_PRICE;
  price: number;
}
interface updateProductGost {
  type: ProductActionTypes.UPDATE_PRODUCT_GOST;
  gost: string;
}
interface setProduct {
  type: ProductActionTypes.SET_PRODUCT;
}
interface setProductImage {
  type: ProductActionTypes.SET_PRODUCT_IMAGE;
  image: File;
}

export type ProductAction =
  | updateProductId
  | updateProductName
  | updateProductType
  | updateProductPrice
  | updateProductGost
  | setProduct
  | setProductImage;

export interface ProductState {
  products: any[];
  tempId: number;
  tempName: string;
  tempType: string;
  tempPrice: number;
  tempGost: string;
  tempImage: File | null;
}

export enum FilterActionTypes {
  UPDATE_PRODUCT_MIN_PRICE = "UPDATE_PRODUCT_MIN_PRICE",
  UPDATE_PRODUCT_MAX_PRICE = "UPDATE_PRODUCT_MAX_PRICE",
  SET_PRODUCT_GOST_FILTER = "SET_PRODUCT_GOST_FILTER",
  REMOVE_PRODUCT_GOST_FILTER = "REMOVE_PRODUCT_GOST_FILTER",
}

interface UpdateProductMinPrice {
  type: FilterActionTypes.UPDATE_PRODUCT_MIN_PRICE;
  minPrice: number;
}

interface UpdateProductMaxPrice {
  type: FilterActionTypes.UPDATE_PRODUCT_MAX_PRICE;
  maxPrice: number;
}

interface SetProductGostFilter {
  type: FilterActionTypes.SET_PRODUCT_GOST_FILTER;
  gost: string;
}

interface RemoveProductGostFilter {
  type: FilterActionTypes.REMOVE_PRODUCT_GOST_FILTER;
  gost: string;
}

export type FilterAction =
  | UpdateProductMinPrice
  | UpdateProductMaxPrice
  | RemoveProductGostFilter
  | SetProductGostFilter;

export interface FilterState {
  minPrice: number;
  maxPrice: number;
  gosts: string[];
}

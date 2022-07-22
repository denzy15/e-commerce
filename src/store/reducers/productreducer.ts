import {
  ProductAction,
  ProductActionTypes,
  ProductState,
} from "../../types/product";

const initialState: ProductState = {
  products: [],
  tempId: 0,
  tempName: "",
  tempType: "",
  tempPrice: 0,
  tempGost: "",
  tempImage: null,
};

const productReducer = (
  state = initialState,
  action: ProductAction
): ProductState => {
  switch (action.type) {
    case ProductActionTypes.UPDATE_PRODUCT_NAME:
      return { ...state, tempName: action.name };
    case ProductActionTypes.UPDATE_PRODUCT_ID:
      return { ...state, tempId: action.id };
    case ProductActionTypes.UPDATE_PRODUCT_TYPE:
      return { ...state, tempType: action.prodType };
    case ProductActionTypes.UPDATE_PRODUCT_PRICE:
      return { ...state, tempPrice: action.price };
    case ProductActionTypes.UPDATE_PRODUCT_GOST:
      return { ...state, tempGost: action.gost };
    case ProductActionTypes.SET_PRODUCT_IMAGE:
      return { ...state, tempImage: action.image };
    case ProductActionTypes.SET_PRODUCT:
      const prod = {
        id: state.tempId,
        name: state.tempName,
        type: state.tempType,
        price: state.tempPrice,
        gost: state.tempGost,
        image: state.tempImage,
      };
      state.products.push(prod);
      state.tempId = 0;
      state.tempName = "";
      state.tempType = "";
      state.tempPrice = 0;
      state.tempGost = "";
      state.tempImage = null;

      return { ...state };
    default:
      return state;
  }
};

export default productReducer;

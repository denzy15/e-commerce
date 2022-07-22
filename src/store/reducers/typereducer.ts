import { TypeAction, TypeActionTypes, TypeState } from "../../types/type";

const initialState: TypeState = {
  types: [],
  tempId: 0,
  tempName: "",
};

const typeReducer = (state = initialState, action: TypeAction): TypeState => {
  switch (action.type) {
    case TypeActionTypes.UPDATE_TYPE_ID:
      return { ...state, tempId: action.id };
    case TypeActionTypes.UPDATE_TYPE_NAME:
      return { ...state, tempName: action.name };
    case TypeActionTypes.SET_TYPE:
      state.types.push({
        id: state.tempId,
        name: state.tempName,
      });
      state.tempId = 0;
      state.tempName = "";
      return { ...state };

    default:
      return state;
  }
};

export default typeReducer;


import { TypeActionTypes } from "../../types/type";

export const setType = () => {
  return {
    type: TypeActionTypes.SET_TYPE,
  };
};

export const updateTypeId = (id: number) => {
  return {
    type: TypeActionTypes.UPDATE_TYPE_ID,
    id: id,
  };
};

export const updateTypeName = (name: string) => {
  return {
    type: TypeActionTypes.UPDATE_TYPE_NAME,
    name: name,
  };
};

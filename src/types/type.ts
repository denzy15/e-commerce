export enum TypeActionTypes {
  UPDATE_TYPE_ID = "UPDATE_TYPE_ID",
  UPDATE_TYPE_NAME = "UPDATE_TYPE_NAME",
  SET_TYPE = "SET_TYPE",
}

interface updateTypeId {
  type: TypeActionTypes.UPDATE_TYPE_ID;
  id: number;
}
interface updateTypeName {
  type: TypeActionTypes.UPDATE_TYPE_NAME;
  name: string;
}
interface setType {
  type: TypeActionTypes.SET_TYPE;
}

export type TypeAction = updateTypeId | updateTypeName | setType;

export interface TypeState {
  types: any[];
  tempId: number;
  tempName: string;
}

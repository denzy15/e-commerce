import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import {
  setType,
  updateTypeId,
  updateTypeName,
} from "../../store/action-creators/type";
import "./Type.scss";

const Type: React.FC = () => {
  const { tempId, tempName, types } = useTypedSelector((state) => state.type);
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  function onIdChange(id: number) {
    dispatch(updateTypeId(id));
  }
  function onNameChange(name: string) {
    dispatch(updateTypeName(name));
  }
  function onAdd() {
    for (const type of types) {
      if (type.id === tempId) {
        setError("Товар с таким ID уже существует");
        return;
      }
    }
    if (tempName.length < 3) {
      setError("Слишком короткое название");
      return;
    }
    setError("");
    dispatch(setType());
  }

  return (
    <div className="type">
      <div className="container">
        <section className="card">
          <div className="error-message">{error}</div>
          <div className="type__id">
            Id типа
            <input
              type="number"
              min={1}
              value={tempId}
              onChange={(e) => onIdChange(parseInt(e.target.value))}
            />
          </div>
          <div className="type__name">
            Название типа
            <input
              type="text"
              value={tempName}
              onChange={(e) => onNameChange(e.target.value)}
            />
          </div>
          <button onClick={onAdd}>Добавить тип</button>
        </section>
      </div>
    </div>
  );
};

export default Type;

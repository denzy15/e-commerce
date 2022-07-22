import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import {
  setProduct,
  setProductImage,
  updateProductGost,
  updateProductId,
  updateProductName,
  updateProductPrice,
  updateProductType,
} from "../../store/action-creators/product";
const Product: React.FC = () => {
  const {
    tempId,
    tempName,
    tempType,
    tempGost,
    tempPrice,
    tempImage,
    products,
  } = useTypedSelector((state) => state.product);

  const productTypes = useTypedSelector((state) => state.type);
  const productTypesName = productTypes.types.map((p) => (
    <option value={p.name} key={p.id}>
      {p.name}
    </option>
  ));
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  function onIdChange(id: number) {
    dispatch(updateProductId(id));
  }
  function onNameChange(name: string) {
    dispatch(updateProductName(name));
  }
  function onPriceChange(price: number) {
    dispatch(updateProductPrice(price));
  }
  function onGostChange(gost: string) {
    dispatch(updateProductGost(gost));
  }
  function onTypeChange(type: string) {
    dispatch(updateProductType(type));
  }
  function onImageChange(img: File) {
    dispatch(setProductImage(img));
  }

  function onAdd() {
    for (const prod of products) {
      if (prod.id === tempId) {
        setError("Товар с таким ID уже существует");
        return;
      }
    }
    if (tempName.length < 3) {
      setError("Слишком короткое название");
      return;
    }
    if (tempPrice < 0) {
      setError("Товар должен стоить больше 0$");
      return;
    }
    if (tempGost === "") {
      setError("Неверный ГОСТ");
      return;
    }
    if (!tempType) {
      setError("Не выбран тип");
      return;
    }
    if (tempImage === null) {
      setError("Загрузите фото");
      return;
    }
    setError("");
    dispatch(setProduct());
  }

  return (
    <div className="product">
      <div className="container">
        <div className="error-message">{error}</div>
        <section className="card">
          <div className="product__id">
            Id продукта
            <input
              type="number"
              min={1}
              value={tempId}
              onChange={(e) => onIdChange(parseInt(e.target.value))}
              required
            />
          </div>
          <div className="product__name">
            Имя продукта
            <input
              type="text"
              value={tempName}
              onChange={(e) => onNameChange(e.target.value)}
              required
            />
          </div>
          <div className="product__type">
            Тип продукта
            <select
              name="types"
              size={1}
              style={{
                width: "170px",
                height: "40px",
                marginBottom: "10px",
                display: "block",
              }}
              onChange={(e) => onTypeChange(e.target.value)}
            >
              <option value=""></option>
              {productTypesName}
            </select>
          </div>
          <div className="product__price">
            Цена продукта (руб)
            <input
              type="number"
              value={tempPrice}
              min={0.01}
              onChange={(e) => onPriceChange(parseInt(e.target.value))}
              required
            />
          </div>
          <div className="product__gost">
            ГОСТ продукта
            <select
              style={{
                width: "170px",
                display: "block",
                height: "30px",
                marginBottom: "10px",
              }}
              name="gost-select"
              onChange={(e) => onGostChange(e.target.value)}
            >
              <option value=""></option>
              <option value="ГОСТ 14911-82">ГОСТ 14911-82</option>
              <option value="ОСТ 36-146-88">ОСТ 36-146-88</option>
              <option value="НТС 65-06">НТС 65-06</option>
              <option value="ОСТ 36-146-88">ОСТ 36-146-88</option>
              <option value="НТС 65-06">НТС 65-06</option>
            </select>
          </div>
          <div className="product__img">
            <input
              type="file"
              onChange={(e) => onImageChange(e.target.files![0])}
            />
          </div>
          <button onClick={onAdd}>Добавить товар</button>
        </section>
      </div>
    </div>
  );
};

export default Product;

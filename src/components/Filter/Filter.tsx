import React from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import {
  updateProductMaxPrice,
  updateProductMinPrice,
} from "../../store/action-creators/filter";
import "./Filter.scss";

const Filter: React.FC = () => {
  const { minPrice, maxPrice } = useTypedSelector((state) => state.filter);

  const dispatch = useDispatch();
  function onMinPriceChange(num: number) {
    if (isNaN(num)) num = 0;
    dispatch(updateProductMinPrice(num));
  }
  function onMaxPriceChange(num: number) {
    if (isNaN(num)) num = 1000000;
    dispatch(updateProductMaxPrice(num));
  }
  return (
    <section className="filter">
      <div className="category section">Категории</div>
      <div className="filt section">Фильтры</div>
      <section className="filter__price-sort"></section>
      <div className="type section">Тип</div>
      <section className="filter__type-sort">
        Цена, руб
        <div>
          <label>
            От
            <input
              type="number"
              value={minPrice}
              onChange={(e) => onMinPriceChange(parseInt(e.target.value))}
            />
          </label>
          <label htmlFor="minPrice">
            До
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => onMaxPriceChange(parseInt(e.target.value))}
            />
          </label>
        </div>
      </section>
      <div className="brand section">Бренд</div>
      <label className="section choose">
        <input type="checkbox" />
        Выбор покупателей
      </label>
      <label className="section best">
        <input type="checkbox" />
        Лучшая цена
      </label>
      <button className="reset">Сбросить фильтры</button>
    </section>
  );
};

export default Filter;

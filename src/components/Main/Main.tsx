import React from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import {
  removeProductGostFilter,
  setProductGostFilter,
} from "../../store/action-creators/filter";
import AddedProduct from "../AddedProduct/AddedProduct";
import Filter from "../Filter/Filter";
import "./Main.scss";

const Main: React.FC = () => {
  const state = useTypedSelector((state) => state.product);
  const { minPrice, maxPrice, gosts } = useTypedSelector(
    (state) => state.filter
  );
  const dispatch = useDispatch();

  const products = state.products.map((p) => {
    if (gosts.length > 0) {
      return (
        p.price >= minPrice &&
        p.price <= maxPrice &&
        gosts.includes(p.gost) && (
          <AddedProduct
            id={p.id}
            key={p.id}
            name={p.name}
            price={p.price}
            image={p.image}
            type={p.type}
            gost={p.gost}
          />
        )
      );
    }

    return (
      p.price >= minPrice &&
      p.price <= maxPrice && (
        <AddedProduct
          id={p.id}
          key={p.id}
          name={p.name}
          price={p.price}
          image={p.image}
          type={p.type}
          gost={p.gost}
        />
      )
    );
  });

  function onGostFilter(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const button: HTMLButtonElement = event.currentTarget;
    const gost: string = button.name;
    if (gosts.includes(gost)) {
      button.classList.remove("active-gost");
      dispatch(removeProductGostFilter(gost));
    } else {
      button.classList.add("active-gost");
      dispatch(setProductGostFilter(gost));
    }
  }

  return (
    <main>
      <section className="top-filter">
        <div className="container">
          <div className="top-filter__types">
            Главная {" > "} Интернет-магазин {" > "}{" "}
            <span>Опоры трубопроводов</span>
          </div>
          <div className="top-filter__row">
            <h2 className="top-filter__title">Опоры трубопроводов</h2>
            <div className="top-filter__icons">
              <span>Сначала популярные</span>
              <div className="top-filter__view"></div>
            </div>
          </div>
        </div>
      </section>
      <div className="container content-cnt">
        <Filter />
        <div className="content">
          <div className="gost-filter">
            <button name="ГОСТ 14911-82" onClick={onGostFilter}>
              ГОСТ 14911-82
            </button>
            <button name="ОСТ 36-146-88" onClick={onGostFilter}>
              ОСТ 36-146-88
            </button>
            <button name="НТС 65-06" onClick={onGostFilter}>
              НТС 65-06
            </button>
            <button name="ОСТ 36-146-88" onClick={onGostFilter}>
              ОСТ 36-146-88
            </button>
            <button name="НТС 65-06" onClick={onGostFilter}>
              НТС 65-06
            </button>
          </div>
          <div className="products-list">{products}</div>
        </div>
      </div>
      <div className="control">
        <div className="container control-cnt">
          <div className="control__show">
            <div>Выводить по</div>
            <div className="control__selected">9</div>
            <div>15</div>
            <div>21</div>
          </div>
          <ul className="control__pages">
            <li></li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li></li>
          </ul>
          <a href="#" className="control__all">
            Показать все товары
          </a>
        </div>
      </div>
      <div className="info">
        <div className="container">
          <h2 className="info__title">
            Опоры трубопроводов от Бастион Груп - производитель металлических
            изделий №1
          </h2>
          <p className="info__text">
            Надежность работы трубопровода в значительной мере зависит от
            правильности и прочности его крепления. Основные средства крепления
            трубопроводов — это опора, подвеска, кронштейны, скобы и другие
            части опорных конструкций. Мы изготавливаем типовые опоры
            трубопроводов по нижеперечисленным существующим нормативным
            документам, а также изготовим любые нестандартные опоры
            трубопроводов по чертежам заказчика.{" "}
          </p>
          <p className="info__text">
            Жесткие и пружинные подвески рассчитаны на вертикальную нагрузку
            горизонтальных и вертикальных участков трубопровода. Основным
            материалом деталей является сталь 17гс-12, 17г1с-12, 14г2-12,
            09г2с-14, 20, 20к и пр.
          </p>
          <p className="info__text">
            Марка стали выбирается исходя от параметров окружающей среды, опоры
            могут использоваться при температуре от -60°C. Конструкции опор,
            представленные на сайте, отличаются между собой методом крепления с
            трубопроводом и несущей способностью.
          </p>
          <p className="info__text">
            Подвески являются сборными устройствами, соединяются при помощи
            сварки. Сварные швы отвечают требованиям СНиП III-18-75, СНиП
            II-23-81. Резьбовые части опор обрабатываются антикоррозионной
            смазкой ПВК по ГОСТ 19537-83 или ее аналогом.
          </p>

          <a href="#">Скрыть описание</a>
        </div>
      </div>
    </main>
  );
};

export default Main;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { DeleteAllCartItems } from "../../store/action-creators/cart";
import CartItem from "../CartItem/CartItem";
import "./Cart.scss";

interface User {
  name: string;
  number: string;
  email: string;
  organisaton: string;
}

const Cart: React.FC = () => {
  const { cartItems } = useTypedSelector((state) => state.cart);
  const cart = cartItems.map((p) => (
    <CartItem
      id={p.id}
      key={p.id}
      name={p.name}
      price={p.price}
      gost={p.gost}
      image={p.image}
    />
  ));
  const dispatch = useDispatch();
  function onAllItemsDelete() {
    dispatch(DeleteAllCartItems());
  }

  const [user, setUser] = useState<User>({
    name: "",
    number: "",
    email: "",
    organisaton: "",
  });

  const [error, setError] = useState("");

  function finishOreder() {
    let regex =
      /^(\+7|7|8)?[\s\-]?\(?[4897][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

    if (cartItems.length === 0) {
      setError("Корзина пуста");
      setTimeout(() => {
        setError("");
      }, 4000);
      return;
    }

    if (user.name.length === 0) {
      setError("Введите имя");
      setTimeout(() => {
        setError("");
      }, 4000);
      return;
    }

    if (!regex.test(user.number)) {
      setError("Неверный номер телефона");
      setTimeout(() => {
        setError("");
      }, 4000);
      return;
    }
    if (user.name!.includes("@")) {
      setError("Неверный Email");
      setTimeout(() => {
        setError("");
      }, 4000);
      return;
    }

    if (user.organisaton.length === 0) {
      setError("Введите Организацию / ИНН");
      setTimeout(() => {
        setError("");
      }, 4000);
      return;
    }
    for (const item of cartItems) {
      console.log(item);
    }

    console.log(`Имя: ${user.name}`);
    console.log(`Телефон: ${user.number}`);
    console.log(`Email: ${user.email}`);
    console.log(`Организация / ИНН: ${user.organisaton}`);
  }

  let totalPrice = cartItems.reduce((a, b) => a + b.price * b.num, 0);

  return (
    <section className="cart">
      <div className="container">
        <div className="top-filter__types">
          Главная {" > "} Интернет-магазин {" > "}{" "}
          <span>Опоры трубопроводов</span>
        </div>
        <h1 className="cart__title">Корзина</h1>
        <section className="cart__block">
          <div className="cart__message">
            Извините, но указанное ранее количество товара недоступно.
            Установлено ближайшее доступное значение.
          </div>
          <div className="cart__order">Заказ</div>
          <div className="cart__items">
            {cart}
            {cart.length === 0 ? (
              <div style={{ textAlign: "center", marginTop: "20px" }}>
                Корзина пуста
              </div>
            ) : (
              <div className="cart__delete-all">
                <button onClick={() => onAllItemsDelete()}>
                  Очистить корзину
                </button>
              </div>
            )}
          </div>
          <div className="cart__checkout checkout">
            <h4 className="checkout__info">Контактная информация</h4>
            <h5 className="checkout__fio">ФИО</h5>
            <div className="checkout__data">
              {error !== "" ? (
                <div className="checkout__error">{error}</div>
              ) : null}
              <div className="checkout__name">
                <input
                  type="text"
                  placeholder="Имя"
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
              </div>
              <div className="checkout__number">
                <input
                  type="text"
                  placeholder="Контактный телефон"
                  value={user.number}
                  onChange={(e) => setUser({ ...user, number: e.target.value })}
                />
              </div>
              <div className="checkout__email">
                <input
                  type="email"
                  placeholder="Email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>
              <div className="checkout__inn">
                <input
                  type="text"
                  placeholder="Организация / ИНН"
                  value={user.organisaton}
                  onChange={(e) =>
                    setUser({ ...user, organisaton: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="checkout__total">
              <span>Итого</span>
              <span>{totalPrice} руб.</span>
            </div>
            <button className="checkout__confirm" onClick={finishOreder}>
              Оформить заказ
            </button>
            <button className="checkout__offer">
              Коммерческое предложение
            </button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Cart;

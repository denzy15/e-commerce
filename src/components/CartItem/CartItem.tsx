import React from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import deleteLogo from "../../media/cart/delete.svg";
import { RemoveCartItem, SetCartItems } from "../../store/action-creators/cart";
import "./CartItem.scss";
interface Props {
  name: string;
  id: number;
  price: number;
  gost: string;
  image: File;
}

const CartItem: React.FC<Props> = ({ id, gost, name, price, image }) => {
  const { cartItems } = useTypedSelector((state) => state.cart);
  const currentItem = cartItems.find((i) => i.id === id);
  const imageUrl = URL.createObjectURL(image);
  const dispatch = useDispatch();
  function onCountIncrease() {
    dispatch(
      SetCartItems(
        cartItems.map((p) =>
          p.id === id ? { ...currentItem, num: currentItem.num + 1 } : p
        )
      )
    );
  }
  function onCountDecrease() {
    if (currentItem.num === 1) dispatch(RemoveCartItem(id));
    else
      dispatch(
        SetCartItems(
          cartItems.map((p) =>
            p.id === id ? { ...currentItem, num: currentItem.num - 1 } : p
          )
        )
      );
  }
  function onItemRemove() {
    dispatch(RemoveCartItem(id));
  }

  return (
    <div key={id} className="cart-item">
      <div className="cart-item__img">
        <img src={imageUrl} alt="" />
      </div>
      <div className="cart-item__body">
        <div className="cart-item__gost">
          <span>{gost}</span>
        </div>
        <h3 className="cart-item__name">{name}</h3>
        <div className="cart-item__price">{price} руб.</div>
      </div>
      <div className="cart-item__counter">
        <button onClick={onCountIncrease}>+</button>
        <span>{currentItem.num}</span>
        <button onClick={onCountDecrease}>-</button>
      </div>
      <div className="cart-item__count-price">
        {price * currentItem.num} руб.
      </div>
      <button className="delete" onClick={onItemRemove}>
        <img src={deleteLogo} alt="" />
      </button>
    </div>
  );
};

export default CartItem;

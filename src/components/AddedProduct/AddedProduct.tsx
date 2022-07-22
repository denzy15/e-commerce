import { useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { SetCartItems } from "../../store/action-creators/cart";

import "./AddedProduct.scss";

interface Props {
  name: string;
  id: number;
  type: string;
  price: number;
  gost: string;
  image: File;
}

const AddedProduct: React.FC<Props> = ({
  name,
  id,
  type,
  price,
  gost,
  image,
}) => {
  const [amount, setAmount] = useState(1);
  const imageUrl = URL.createObjectURL(image);
  const { cartItems } = useTypedSelector((state) => state.cart);
  const product = { name, id, price, gost, image };
  const dispatch = useDispatch();
  function onItemAdd() {
    const exist = cartItems.find((p) => p.id === id);
    if (exist) {
      dispatch(
        SetCartItems(
          cartItems.map((p) =>
            p.id === id ? { ...exist, num: exist.num + amount } : p
          )
        )
      );
    } else {
      dispatch(SetCartItems([...cartItems, { ...product, num: amount }]));
    }
    setAmount(1);
  }

  return (
    <section className="product-card">
      <div className="product-card__img">
        <img src={imageUrl} alt="" />
      </div>
      <div className="product-card__gost">
        <span>{gost}</span>
      </div>
      <h3 className="product-card__name">{name}</h3>
      <div className="product-card__price">
        <span>{price} руб.</span>
        <div className="amount">
          <button onClick={() => setAmount((amount) => amount + 1)}>+</button>
          <span>{amount}</span>
          <button
            onClick={() =>
              setAmount((amount) => (amount !== 1 ? amount - 1 : amount))
            }
          >
            -
          </button>
        </div>
      </div>
      <div className="on-hover">
        <button className="add-to-cart" onClick={() => onItemAdd()}>
          Добавить в корзину
        </button>
        <a href="">Подробнее</a>
      </div>
      <ul className="extra">
        {name.includes("о") ? <li>ХИТ</li> : null}
        {name.includes("а") ? <li>АКЦИЯ</li> : null}
      </ul>
    </section>
  );
};

export default AddedProduct;

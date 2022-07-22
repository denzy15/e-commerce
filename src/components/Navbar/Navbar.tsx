import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import favIcon from "../../media/fav.svg";
import logo from "../../media/logo.png";
import cartIcon from "../../media/red-cart.svg";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Navbar = () => {
  const { cartItems } = useTypedSelector((state) => state.cart);
  return (
    <>
      <header className="header">
        <div className="container header__cnt">
          <div className="header__links">
            <NavLink to="/type">Тип продукта</NavLink>
            <NavLink to="/products">Продукты</NavLink>
          </div>
          <div className="header__info">
            <a href="#" className="header__num">
              +7 (499) 380-78-90
            </a>
            <a href="#" className="header__city">
              Москва
            </a>
            <a href="#" className="header__mail">
              info@bastion.pro
            </a>
          </div>
        </div>
      </header>
      <section className="hat">
        <div className="hat__cnt container">
          <div className="hat__logo">
            <NavLink to="/main">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
          <p className="hat__title">Производитель металлических изделий №1</p>
          <button className="hat__catalog">Каталог</button>
          <div className="hat__input">
            <input type="text" placeholder="Поиск по названию..." />
          </div>
          <div className="hat__fav">
            <img src={favIcon} alt="" />
            Избранное
          </div>
          <NavLink to="/cart" className="hat__fav">
            <span>{cartItems.length}</span>
            <img src={cartIcon} alt="" />
            Корзина
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Navbar;

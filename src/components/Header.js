import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";


function Header(props) {
  const {totalPrice} = useCart()

  
  
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="img/logo.png" alt="Logo" />
          <div>
            <h3 className="text-uppercase">Clothing store</h3>
            <p className="opacity-5">Магазин лучшей одежды</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img
            className="mr-20"
            width={18}
            height={18}
            src="img/cart.svg"
            alt="Cart"
          />
          <span>{ totalPrice } руб</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="/favorites">
            <img width={18} height={18} src="img/heart.svg" alt="Heart" />
          </Link>
        </li>
        <li>
          <Link to='/orders'>
          <img width={18} height={18} src="img/user.svg" alt="User" />
          </Link>
        </li>
      </ul>
    </header>
  );
}
export default Header;

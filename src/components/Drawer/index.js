import React from "react";
import Info from "../Info";
import axios from "axios";
import { useCart } from "../../hooks/useCart";

import styles from "./drawer.module.scss";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function CartDrawer({ onClose, onRemove, items = [], opened }) {
  const { cartItems, setCartItems, totalPrice } = useCart();
  const [orderId, setOrderId] = React.useState(null);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onClockOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://63590ed8ff3d7bddb997c370.mockapi.io/Orders",
        { items: cartItems }
      );
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (var i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          `https://63590ed8ff3d7bddb997c370.mockapi.io/Cart/` + item.id
        );
        await delay(1000);
      }
    } catch (error) {
      alert("Не удалось создать заказ!");
    }
    setIsLoading(false);
  };

  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ""}`}>
      <div className={styles.drawer}>
        <h2 className="mb-30 d-flex justify-between">
          Корзина{" "}
          <img
            className="removeBtn cu-p"
            src="https://raw.githubusercontent.com/Torin72/STORE/8b4a81f0c42eccb11212737af00b96e5bfc0d878/img/btn-remove.svg"
            alt="Close"
            onClick={onClose}
          />
        </h2>

        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className="items flex">
              {items.map((obj) => (
                <div
                  key={obj.id}
                  className="cartItem d-flex align-center mb-20"
                >
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"
                  ></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="https://raw.githubusercontent.com/Torin72/STORE/8b4a81f0c42eccb11212737af00b96e5bfc0d878/img/btn-remove.svg"
                    alt="Remove"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>{totalPrice} руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{(totalPrice / 100) * 5} руб.</b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={onClockOrder}
                className="greenButton"
              >
                Оформить заказ <img src="https://raw.githubusercontent.com/Torin72/STORE/8b4a81f0c42eccb11212737af00b96e5bfc0d878/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
            description={
              isOrderComplete
                ? `Ваш Заказ № ${orderId} скоро будет передан курьерской доставке`
                : "Добавьте хотя бы одну вещь, чтобы сделать заказ."
            }
            image={
              isOrderComplete
                ? "https://github.com/Torin72/STORE/blob/gh-pages/img/complete-order.jpg?raw=true"
                : "https://github.com/Torin72/STORE/blob/gh-pages/img/empty-cart.jpg?raw=true"
            }
          />
        )}
      </div>
    </div>
  );
}

export default CartDrawer;

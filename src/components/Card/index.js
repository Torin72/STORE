import React from "react";
import ContentLoader from "react-content-loader";
import styles from "./Card.module.scss";
import AppContext from "../../context";

function Card({
  id,
  onFavorite,
  imageUrl,
  price,
  title,
  onPlus,
  favorited = false,
  loding = false,
}) {


  const { isItemAdded } = React.useContext(AppContext)
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const obj = { imageUrl, parentId: id, price, title, id }

  
  const onClickPlus = () => {
    onPlus(obj);
  };

  const onClickFavorite = () => {
    onFavorite(obj);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loding ? (
        <ContentLoader
          speed={2}
          width={150}
          height={220}
          viewBox="0 0 150 230"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
          <rect x="0" y="99" rx="5" ry="5" width="150" height="15" />
          <rect x="0" y="122" rx="5" ry="5" width="100" height="15" />
          <rect x="0" y="166" rx="5" ry="5" width="80" height="25" />
          <rect x="118" y="159" rx="5" ry="5" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
           {onFavorite && (
            <div className={styles.favorite} onClick={onClickFavorite}>
              <img src={isFavorite ? 'https://raw.githubusercontent.com/Torin72/STORE/8b4a81f0c42eccb11212737af00b96e5bfc0d878/img/liked.svg' : 'https://raw.githubusercontent.com/Torin72/STORE/8b4a81f0c42eccb11212737af00b96e5bfc0d878/img/unliked.svg'} alt="Unliked" />
            </div>
          )}
          <img width={133} height={112} src={imageUrl} alt="Sneakers"></img>
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
            { onPlus && (<img
              className={styles.plus}
              onClick={onClickPlus}
              src={isItemAdded(id) ? "https://raw.githubusercontent.com/Torin72/STORE/8b4a81f0c42eccb11212737af00b96e5bfc0d878/img/btn-checked.svg" : "https://raw.githubusercontent.com/Torin72/STORE/8b4a81f0c42eccb11212737af00b96e5bfc0d878/img/btn-plus.svg"}
              alt="Plus"
             />)}
          </div>
        </>
      )}
    </div>
  );
}

export default Card;

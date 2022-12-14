import Card from "../components/Card";
import React from "react";


function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  isLoading,
}) {
  

  const renderItems = () => {
    const filtredItems = items && items.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase()));
    return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        loding={isLoading}
        {...item}
      />
    ));
  };

  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Вся одежда"}
        </h1>
        <div className="search-block d-flex">
          <img src="https://raw.githubusercontent.com/Torin72/STORE/8b4a81f0c42eccb11212737af00b96e5bfc0d878/img/search.svg" alt="Search" />
          {searchValue && (
            <img
              className="clear removeBtn cu-p"
              src="https://raw.githubusercontent.com/Torin72/STORE/8b4a81f0c42eccb11212737af00b96e5bfc0d878/img/btn-remove.svg"
              alt="Clear"
              onClick={() => setSearchValue("")}
            />
          )}
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск..."
          />
        </div>
      </div>

      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
}

export default Home;

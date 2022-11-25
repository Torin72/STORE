import Card from "../components/Card";
import React from 'react';
import axios from "axios";



function Orders() {
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    ( async() => {
     try{
      const { data } = await axios.get(
        "https://63590ed8ff3d7bddb997c370.mockapi.io/Orders");
        // console.log(data.map(obj => obj.items).flat())
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
        setIsLoading(false)
     } catch (error) {
      alert('Ошибка при запросе заказов')
      console.error(error)
     }
    })()
  }, [])
  
  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>
          Мои покупки
        </h1>
        
      </div>

      <div className="d-flex flex-wrap">
      {(isLoading ? [...Array(8)] : orders).map((item, index) => (
            <Card  
            key={index}     
        loding={isLoading}
        {...item}/>
          ))}
      </div>
    </div>
  );
}

export default Orders;

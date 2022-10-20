import  Card  from './components/Card';
import Header from './components/Header'
import CartDrawer from './components/CartDrawer'

function App() {
  return (
    <div className="wrapper clear">
      <div style={{display: 'none'}} className="overlay">
     <CartDrawer/>
      </div>

      <Header/>
      
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Вся одежда</h1>
          <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          <input placeholder="Поиск..."/>
          </div>
        </div>
        
      <div className="sneakers d-flex">
        <Card />
                  
       
      </div>
      </div>
    </div>
  );
}

export default App;

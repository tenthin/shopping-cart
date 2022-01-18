import Header from './components/Header'
import Main from './components/Main'
import Basket from './components/Basket'
import data from './data'
import { useState } from 'react'


function App() {
  const {products} = data  //using constracting assignment to extract products form data//
  const [cartItems, setCartItems] = useState([])
  
  return (
    <div className="App">
      <Header></Header>
      <div className='row'>
        {/* pass products to main component */}
        <Main products={products}></Main>
        <Basket cartItems={cartItems}></Basket>
      </div>
    </div>
  );
}

export default App;

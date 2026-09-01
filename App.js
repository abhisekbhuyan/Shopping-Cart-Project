import React, { useState } from "react";
import Header from "./header";
import './App.css';
import Products from "./Product";
import CartList from "./CartList";
function App() {
  const [product] = useState([
    {
      url: 'https://th.bing.com/th/id/OIP.KJ863TFexg2ux2Lm6VxfdgHaHa?w=209&h=209&c=7&r=0&o=5&dp=1.3&pid=1.7',
      name: 'lenovoideapad Slim 3',
      category: 'Laptop',
      seller: 'Lenovo',
      price: 57000
    },
    {
      url: 'https://tse1.mm.bing.net/th?id=OIP.Wd5h_lUDFjl4tTtuIR_HjwHaHa&pid=Api&P=0&w=300&h=300',
      name: 'fastrack w98',
      category: 'Watch',
      seller: 'Fastrack',
      price: 1599
    },
    {
      url: 'https://i.ytimg.com/vi/KRxNI--IxrY/maxresdefault.jpg',
      name: 'mi 12pro',
      category: 'Mobile',
      seller: 'Mi',
      price: 20000
    },
    {
      url: 'https://cdn1.smartprix.com/rx-iN1Shi5s0-w1200-h1200/boat-rockerz-450-pro.jpg',
      name: 'boAt v20',
      category: 'Headset',
      seller: 'boAt',
      price: 999
    },
    {
      url: 'https://m.media-amazon.com/images/I/61cFZUzH+yL._SX679_.jpg',
      name: 'IFB Washing Machine',
      category: 'Electronics',
      seller: 'Electro',
      price: 20000
    }
  ]);

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  const handleShow = (value) => {
    setShowCart(value);
  };
  return (
    <div>
    <Header count={cart.length} handleShow={handleShow} />
    {showCart ? <CartList cart={cart} /> : <Products product={product} addToCart={addToCart} />}
  </div>
  );
}

export default App;

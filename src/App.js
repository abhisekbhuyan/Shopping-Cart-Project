import React, { useState } from "react";
import Header from "./header";
import './App.css';
import Products from "./Product";
import CartList from "./CartList";
function App() {
  const [product] = useState([
    {
      url: 'data:image/webp;base64,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',
      name: 'lenovoideapad Slim 3',
      category: 'Laptop',
      seller: 'Lenovo',
      price: 68000
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIFnsuX1opNA5s4MTIzIVYxiE9ICIJfZuRcteUfHjk8w&s=10',
      name: 'fastrack w98',
      category: 'Watch',
      seller: 'Fastrack',
      price: 1999
    },
    {
      url: 'https://i02.appmifile.com/mi-com-product/fly-birds/redmi-note-12-pro-5g/m/db430fa7f2b7b7391b0e7a264b6b3b76.jpg',
      name: 'mi 12pro',
      category: 'Mobile',
      seller: 'Mi',
      price: 20000
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiMmc8mVjT1GNYNFYXLMYNeJKQtKBXljUAD9xxnUqw1g&s=10',
      name: 'boAt v20',
      category: 'Headset',
      seller: 'boAt',
      price: 2000
    },
    {
      url: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSxVOGCBTKpM2bhogcYJUVEspIvm3JTGafSAj9ImyGDo8V-SGhPFUH29ojQVR4tr70etrCb_uYv8MhkHDK6cIEU6SIELCeF4KOwJNukP0_cp00AEjeNDUdFdxDnFGBJSEJgkzZjVg&usqp=CAc',
      name: 'IFB Washing Machine',
      category: 'Electronics',
      seller: 'Electro',
      price: 53990
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


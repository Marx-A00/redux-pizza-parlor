import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [pizzaList, setPizzaList] = useState([]);

  const cartItems = useSelector(store => store.cart);
  
 const totalCartPrice = Number(cartItems.reduce((prev, current) => prev + Number(current.price),0));
 console.log("Cart",cartItems);
 console.log(totalCartPrice);

  const dispatch = useDispatch();

  useEffect(() => {
    getPizzas();
  }, []);

  const getPizzas = () => {
    axios({
      method: "GET",
      url: "/api/pizza",
    })
      .then((response) => {
        const fetchedPizzas = response.data;
        setPizzaList(fetchedPizzas);
        console.log(fetchedPizzas);
      })
      .catch((error) => {
        console.log("error on GET", error);
      });
  };
  const addPizzaToCart = (event) => {
    console.log(event.target.parentElement);
    console.log(event.target.value);
    // dispatch({
    //   type: `ADD_PIZZA`,
    //   payload: event.target.value,
    // });
  };

  return (
    <div className="App">
      <header className="App-header">
        {totalCartPrice}
        <h1 className="App-title">Prime Pizza</h1>
      </header>
      <div className="container">
        {pizzaList.map((pizza) => {
          return (
            <div className="card" height={200} width={200}>
              <p>{pizza.name}</p>
              <p>{pizza.description}</p>
              <p>{pizza.price}</p>
              <button onClick={addPizzaToCart}>Add to Cart</button>
            </div>
          );
        })}
      </div>

      {/* <img src='images/pizza_photo.png' /> */}
      {/* <p>Pizza is great.</p> */}
    </div>
  );
}

export default App;

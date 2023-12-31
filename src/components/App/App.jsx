import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import PizzaItem from "../PizzaItem/PizzaItem";
import { HashRouter as Router,Route,Provider,Link } from "react-router-dom";
import OrderDetails from "../OrderDetails/OrderDetails";


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
 

  return (
    <div className="App">
      <Router>

      <header className="App-header">
        ${totalCartPrice}
        <h1 className="App-title">Prime Pizza</h1>
      </header>
      <Route exact path="/">

      <div className="container">
        {pizzaList.map((pizza) => {

            return(<PizzaItem pizza={pizza}/>)
        })}
      </div>
      <Link to="/orderDetails">
        
      <button className="next">NEXT</button>
      </Link>
      </Route>
      <Route exact path="/orderDetails">
        <OrderDetails />

      </Route>

      {/* <img src='images/pizza_photo.png' /> */}
      {/* <p>Pizza is great.</p> */}
      </Router>
    </div>
  );
}

export default App;

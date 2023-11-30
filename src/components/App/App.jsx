import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react'
import './App.css';

function App() {

  const [pizzaList, setPizzaList] = useState([]);

  useEffect(() =>{
    getPizzas();
  },[]);

  const getPizzas= () => {axios({
    method: 'GET',
    url:'/api/pizza'
  })
  .then((response)=>{
    const fetchedPizzas = response.data;
    setPizzaList(fetchedPizzas)
    console.log(fetchedPizzas)

  })
  .catch((error)=>{
    console.log('error on GET',error);
  })
}


  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <div className="container">

        {pizzaList.map((pizza)=>{

          return(
          <div className="card" height={200} width={200}>
            <p>{pizza.name}</p>
            <p>{pizza.description}</p>
            <p>{pizza.price}</p>
            <button>Add to Cart</button>

          </div>
          )
        })}
      </div>
  
      {/* <img src='images/pizza_photo.png' /> */}
      {/* <p>Pizza is great.</p> */}
  
    </div>
  );
}

export default App;

import React from "react";
import {useDispatch} from "react-redux";
import "../App/App.css";
import {useState} from 'react'

function PizzaItem({pizza}){
    const [isToggled,setIsToggled] = useState(false)

    const dispatch = useDispatch();
    const addPizzaToCart = () => {
        dispatch({
          type: `ADD_PIZZA`,
          payload: pizza,
        });
        toggleButton();
      }
      
      const toggleButton =()=>{
    
        setIsToggled(!isToggled);
      }
    
      const displayButton =()=>{
        if (isToggled){
          return(
            <button>Delete</button>
          )
        }
        else{
          return(
    
            <button onClick={() => addPizzaToCart()}>Add To Cart</button>
          )
        }
      }

    return (
        <div className="card" height={200} width={200}>
          <p>{pizza.name}</p>
          <p>{pizza.description}</p>
          <p>{pizza.price}</p>
          {displayButton()}
        </div>
      );
}
export default PizzaItem;
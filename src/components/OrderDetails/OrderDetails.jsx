import {useState} from 'react'
import { useDispatch } from 'react-redux';
import "./OrderDetails.css"
function OrderDetails(){
    const [nameInput,setNameInput] = useState("");
    const [addressInput,setAddressInput] = useState("");
    const [cityInput,setCityInput] = useState("");
    const [zipInput,setZipInput] = useState("");

    const dispatch = useDispatch();

    const handleNameInput=(e)=>{
        setNameInput(e.target.value);
    }
    const handleAddressInput=(e)=>{
        setAddressInput(e.target.value);
    }
    const handleCityInput=(e)=>{
        setCityInput(e.target.value);
    }
    const handleZipInput=(e)=>{
        setZipInput(e.target.value);
    }
    const handleNextSubmit=(e)=>{
        e.preventDefault()

        dispatch({
            type: `SET_ORDER_DETAILS`,
            payload:{
                name: nameInput,
                address: addressInput,
                city: cityInput,
                zip: zipInput
            }
        })
    }

    return (
        <form onSubmit={handleNextSubmit}>
            <h1>Customer Information</h1>
            <input
            placeholder="Name"
            type="text"
            value={nameInput}
            onChange={handleNameInput}
            />
            <input
            placeholder='Street Address'
            type="text"
            value={addressInput}
            onChange={handleAddressInput}
            />
                        <input
            placeholder='City'
            type="text"
            value={cityInput}
            onChange={handleCityInput}
            />
                        <input
            placeholder='Zip'
            type="text"
            value={zipInput}
            onChange={handleZipInput}
            />
            <input
            type="radio"

            
            />
            <input
            type="radio"/>
            <label for="Pickup"></label>
        <button className='next'>NEXT</button>
        </form>
    )
}
export default OrderDetails;

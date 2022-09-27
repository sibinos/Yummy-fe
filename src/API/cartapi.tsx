import { Dispatch } from "redux"
import { cartItemtAction } from "../redux/cart/cartaction";

const fetchCartItem=()=>{
    return (dispatch:Dispatch)=>{
        fetch('http://localhost:8001/auth/cart',{headers:
        {'token':String(localStorage.getItem('tokenName'))}})
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data.result);
            
            dispatch(cartItemtAction(data.result))
            
        })
}}


export  {fetchCartItem}
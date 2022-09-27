import './cart.css'
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../redux/store';
import {fetchCartItem} from '../API/cartapi';
import {ItemInterface} from '.././typescript/interfaces';
import axios from 'axios';
function Cart(){
    const cartItems=useSelector((state:StateType)=>{return state.cartReducer.cartItems})
    const dispatch=useDispatch()    
    useEffect(()=>{
        dispatch<any>(fetchCartItem())
    },[dispatch]) 
  
    const removeItem=(item:any)=>{
    console.log(item)
    axios.post('http://localhost:8001/auth/removeItem',{product_id:item.product_id},{headers:
    {'token':String(localStorage.getItem('tokenName'))}}
    ).then((res)=>{
        dispatch<any>(fetchCartItem())
    })
}
    const plusCount=(item:any)=>{
        axios.post('http://localhost:8001/auth/updateCount',{product_id:item.product_id,update:'+'},{headers:
        {'token':String(localStorage.getItem('tokenName'))}}).then((res)=>{
            console.log(res)
            dispatch<any>(fetchCartItem())
        })
    }
        
    const minusCount=(item:any)=>{
        axios.post('http://localhost:8001/auth/updateCount',{product_id:item.product_id,update:'-'},{headers:
        {'token':String(localStorage.getItem('tokenName'))}}).then((res)=>{
            dispatch<any>(fetchCartItem())
        })}

    return(
        <div className="cart">

            <div>
                {cartItems.map((item:any)=> <div>
                                            <div className="items" key={item.id}>
                                                <img className='product-img' src={item.imageurl} alt="img1" />
                                                <h3>Product : {item.product_name}</h3>
                                                <p>Price : {item.price}</p>
                                                <p>total :{item.total}</p>
                                                <button onClick={()=>plusCount(item)}>+</button>
                                                <span> {item.quantity} </span>
                                                <button onClick={()=>{minusCount(item)}}>-</button>
                                                <button id="btn" onClick={()=>removeItem(item)}>Delete</button>
                                            </div><br/><br/>
                                        </div>)}
            </div>
         </div>
    )
}
export default Cart;
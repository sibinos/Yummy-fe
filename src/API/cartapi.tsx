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

// function updateCount(id:number,updatedCount:number){
//     return (dispatch:Dispatch)=>{
//         if(updatedCount > 0){
//             fetch(`http://localhost:8001/auth/cart/${id}`, 
//             {
//                 method: 'PATCH',
//                 body: JSON.stringify({count: updatedCount}),
//                 headers: {'Content-Type': 'application/json',},
//             })
//             .then(response => response.json())
//             .then(()=>dispatch<any>(fetchCartItem()))
//         }
//         else{
//             fetch(`http://localhost:8000/auth/cart/${id}`, 
//             {method: 'DELETE'})
//             .then(()=>dispatch<any>(fetchCartItem()))
//         }
//     }
// }

export  {fetchCartItem}
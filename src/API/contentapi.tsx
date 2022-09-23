import axios from "axios"
import { Dispatch } from "redux"
import { contentAction } from "../redux/content/contentacttion"
import {ContentType} from '.././typescript/interfaces'
const fetchData= ()=>{
    return async (dispatch:Dispatch)=>{
    try {
        const response= await axios.get('http://localhost:8001/auth/displayItem',{headers:
        {'token':String(localStorage.getItem('tokenName'))}})
        dispatch(contentAction(response.data.result))
        console.log(response.data.result,"display data");
    } catch (error) {
        console.log(error)
    }
    }
}
const addtocart=(detail:ContentType)=>{

    return async (dispatch:Dispatch)=>{
        let cartitem = {...detail,count:1}

        fetch(`${process.env.REACT_APP_URL}/cartitems`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            let ids = data.map((item:ContentType)=>{
                return(item.productId)
            })
            if(!ids.includes(cartitem.productId)){
                fetch(`${process.env.REACT_APP_URL}/cartitems`, {
                    method: 'POST',
                    body: JSON.stringify(cartitem),
                    headers: { 'Content-Type': 'application/json' }
                })
            }
        })
    }
}

export type fetchDataType=ReturnType<typeof fetchData>

export { fetchData,addtocart};
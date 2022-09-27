import './content.css'
import { useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {fetchData,addtocart} from '../../API/contentapi';
import {StateType} from '../../redux/store';
import {quantityAction} from '../../redux/common/quantityaction'
import axios from "axios";
// import { json } from 'stream/consumers';
// import {fetchDataType} from '../../API/contentapi'
interface ContentType{
    "id": number,
    "product_name": string,
    "imageurl": string,
    "price": number
}
function Content(){
    const content=useSelector((state:StateType)=>{return state.contentReducer.content})
    const isadd=useSelector((State:StateType)=>{return State.quantityReducer.isAdd})
    const dispatch=useDispatch()
    
    useEffect(()=>{
    dispatch<any>(fetchData())
    },[dispatch])
    const addtocart=(detail:any)=>{
        console.log(detail+"ehere")
        axios.post('http://localhost:8001/auth/addItem',{product_id:detail.id,quantity:1},{headers:
        {'token':String(localStorage.getItem('tokenName'))}})
        dispatch(quantityAction(true))
    }

    return(
        <div className="Meanubar">
            <h2>Trending Items</h2>
            <div className="menuItems">
            {content.map((detail:any) => <div className="items">
                                                <img className='product-img' src={detail.imageurl} alt="img1" />
                                                <h3>{detail.product_name}</h3>
                                                <p>{detail.price}</p>
                                                <button onClick={()=>addtocart(detail)}>Add to Cart</button>
                                            </div>)}
            </div>
        </div>

   ); 
}
export default Content;
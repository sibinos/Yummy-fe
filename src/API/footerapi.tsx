import { footerAction,footerAction2} from "../redux/footer/footeraction";
import {Dispatch} from 'redux'
function getFooter(){
    return (dispatch:Dispatch)=>{        
        fetch(`${process.env.REACT_APP_URL}/listArray`)
        .then(res=>{return  res.json()})
        .then(data=>{dispatch(footerAction(data));}) 

        fetch(`${process.env.REACT_APP_URL}/listArray2`)
        .then(res=>{return  res.json()})
        .then(data=>{dispatch(footerAction2(data));})  
        }
    }
export default getFooter;
 
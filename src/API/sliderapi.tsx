import { sliderAction } from "../redux/slider/slideraction";
import {Dispatch} from "redux"
function Getslider(){
    return  (dispatch:Dispatch)=>{
        fetch(`${process.env.REACT_APP_URL}/x`)
        .then(res=>{return res.json()})
        .then(data=>{return dispatch(sliderAction(data))})

    }
}
export default Getslider;
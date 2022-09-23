import { useState, useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Getslider from '../../API/sliderapi'
import './slider.css'
import {StateType} from '../../redux/store'
function Slider(){
    const array=useSelector((state:StateType)=> {return state.sliderReducer.array})
    const dispatch=useDispatch()
    useEffect(()=>{
          dispatch<any>(Getslider())
    },[dispatch])
    let [index,setIndex]=useState(0)
    const changeImage=(pre:string)=>{
        let newindex=index
        if(pre==='prev'){
            newindex--;
            if(newindex < 0){
                newindex=array.length-1;
            }
        } 
        if(pre==='next'){
            newindex++;
            if(newindex>= 3){
                newindex = 0;
            }  
        }
        setIndex(newindex);
    }
    return(
        <div>
            <div className='slider'>
                <button className="btn1" onClick={()=>changeImage('prev')}>{'<<'}</button>
                <img src={array[index]} alt="new"></img>
                <button className="btn2" onClick={()=>changeImage('next')}>{'>>'}</button>
            </div> 
        </div>
       
    );
}
export default Slider;
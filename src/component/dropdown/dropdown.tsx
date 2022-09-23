import { useState, useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import Getdropdown from '../../API/dropdownapi';
import './dropdown.css';
import {StateType} from '../../redux/store'
import {DropdownInterface } from '../../typescript/interfaces'
function Dropdown(){
    const obj=useSelector((state:StateType)=>{return state.dropdownReducer.obj})
    const dispatch=useDispatch()
    const [food,setFood]=useState([])
    useEffect(()=>{ 
        dispatch<any>(Getdropdown())
    },[dispatch])
    useEffect(()=>{ 
        setFood(obj)
    },[obj])

    const showFood = (e:React.ChangeEvent<HTMLSelectElement>)=>{
        let filterValue;
        if (e.target.value==="all"){
            filterValue = obj;
        }
        else{
            filterValue = obj.filter((item:DropdownInterface) => item.catagory_name === e.target.value);
        }
        console.log(filterValue)
        setFood(filterValue)
    }
    return(
        <div className='drop'>
        <div className="dropdown">
            <div>
                <label form="Burgers" >Burgers</label>
                <select onChange={(e)=>showFood(e)}>
                    <option value="all">All</option>
                    <option value="burger">Burger</option>
                    <option value="pizza">Pizza</option>
                </select>
            </div>
        </div>
            <div  className='displaydiv'>
                    {food.map((item:DropdownInterface)=><div>
                                        <div>
                                            <img src={item.imageurl} alt="" />
                                            <h3>{item.product_name}</h3>
                                            <p>{item.price}</p>
                                        </div>
                                    </div>   
                    )}
            </div>
        </div>
    );
}
export default Dropdown;
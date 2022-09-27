import './header.css'
import logo1 from '../../assets/logo1.jpg'
import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {StateType} from '../../redux/store';
import {useSelector,useDispatch} from 'react-redux'
import {quantityAction} from '../../redux/common/quantityaction'



function Header(){
    const isAuthenticated :string|null = sessionStorage.getItem("Authenticate");
    const history = useHistory();
    const content=useSelector((state:StateType)=>{return state.contentReducer.content})
    const isadd=useSelector((State:StateType)=>{return State.quantityReducer.isAdd})
    const dispatch=useDispatch();

    const logout = ()=>{
        localStorage.removeItem('tokenName')
        history.push('/login')
    }
    let tok:any=localStorage.getItem('tokenName')
    const [count,setCount]=useState('')
    useEffect(()=>{ 
        axios.get('http://localhost:8001/auth/displayCount',{headers:
        {'token':String(localStorage.getItem('tokenName'))}}).then((res)=>{
            setCount(res.data.result[0].totalItems);
            console.log(res.data.result[0].totalItems,"varrr");
            
        })
    },[dispatch<any>(quantityAction)])
    


    return(
        <div className="header">
            <div>
            <Link to='/'><img src={logo1} alt=""/></Link>
            <p>YUMMY</p>
            </div>

            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/cart"><span className="material-symbols-outlined">shopping_cart</span>{count}</Link></li>
                <li>{tok.length<0 ? <Link to="/login" ><button>Login</button></Link>:<button onClick={logout}>Logout</button>}</li>
            </ul>
        </div>
    );
}
export default Header;
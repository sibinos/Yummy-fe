import { dropdownAction } from "../redux/dropdown/dropdownacttion";
import { loginAction } from "../redux/login/loginaction";
import {Dispatch} from 'redux';
// import {useDispatch} from 'react-redux';
function Getdropdown() {
    // const dispatcha=useDispatch()
    return (dispatch:Dispatch)=>{
        fetch('http://localhost:8001/auth/dropdown', {headers:
        {'token':String(localStorage.getItem('tokenName'))}})
        .then(res=>
            
        res.json()
           
        )
        .then(data=>{
            dispatch(dropdownAction(data.result))
            if(data.success==false){
                localStorage.removeItem('tokenName')
                dispatch(loginAction(false))
                
                
            }
           
        }).catch(err=>{
            console.log(err)
            
        })

    }
}
export default Getdropdown;
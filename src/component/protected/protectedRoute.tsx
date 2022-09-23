import {Route,Redirect, useHistory} from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import { useDispatch, useSelector } from 'react-redux'

interface Privatetype{
    children : React.ReactNode,
    path : string,
}

const ProtectedRoute=({children,...rest}:Privatetype)=>{
    const history=useHistory();
    const state:any=useSelector(state=>state)
    console.log(state.LoginReducer.isAuthenticated)
    if(!state.LoginReducer.isAuthenticated){
        return <Redirect to="/login"/>
    }
    return(
        <div>
        <Header/>
        <Route  {...rest} render={()=>{
            if(state.LoginReducer.isAuthenticated){
                return children
            }
            
        }}/>
        <Footer/>

        </div>
    )
}
export default ProtectedRoute;

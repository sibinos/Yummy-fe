import './header.css'
import logo1 from '../../assets/logo1.jpg'
import { Link, useHistory } from 'react-router-dom';

function Header(){
    const isAuthenticated :string|null = sessionStorage.getItem("Authenticate");
    const history = useHistory();

    const logout = ()=>{
        localStorage.removeItem('tokenName')
        history.push('/login')
    }
    let tok:any=localStorage.getItem('tokenName')


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
                <li><Link to="/cart">Cart</Link></li>
                <li>{tok.length<0 ? <Link to="/login" ><button>Login</button></Link>:<button onClick={logout}>Logout</button>}</li>
            </ul>
        </div>
    );
}
export default Header;
import Home from "./page1/home";
import Lander from "./page1/lander";
import ProtectedRoute from "./component/protected/protectedRoute";
import Profile from './component/profile/profile'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import { Login } from "./page1/login";
import Cart from "./page1/cart"
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <Switch>
          <Route  path='/login'><Login/></Route>
          <Route path="/about"><Lander/></Route>
          <Route path="/profile" ><Profile/></Route>
          <ProtectedRoute path='/cart'><Cart/></ProtectedRoute>
          <ProtectedRoute  path="/" ><Home/></ProtectedRoute>
        </Switch>
      </Router> 
    </div>
    </Provider>
  );
}

export default App;

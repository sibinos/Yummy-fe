import { loginType } from "./logintype";
import { loginActionType } from "./loginaction";
const initialstate={
    isAuthenticated : localStorage.getItem('tokenName')?true:false,
}
function LoginReducer(state=initialstate, action:loginActionType){
    switch(action.type){
        case loginType:
            return {
                ...state, isAuthenticated:action.payload
            }
            default:
                return state
    }
}
export default  LoginReducer;
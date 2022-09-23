import { loginType } from "./logintype";
export const loginAction=(isAuthenticated:boolean)=>{
    return{
        type:loginType,
        payload:isAuthenticated
    }
}
export type loginActionType=ReturnType<typeof loginAction>



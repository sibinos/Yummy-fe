import { list1,list2 } from "./footertype";
import {footerActionType} from "./footeraction"
type initialStateType={
    items1:string[],
    items2:string[]
}
const initialstate:initialStateType={
    items1:[],
    items2:[]
}
function FooterReducer(state=initialstate,action:footerActionType){
    switch(action.type){
        case list1:
            return {
                ...state,items1:action.payload
            }
        case list2:
            return {
                ...state,items2:action.payload
            }
            default:
                return state
    }
}
export default  FooterReducer;
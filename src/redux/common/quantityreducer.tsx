import { cartItemType } from "./quantitytype";
import { quantityAction, quantityActionType } from "./quantityaction";
const initialstate={
    isAdd : false,
}
function quantityReducer(state=initialstate, action:quantityActionType){
    switch(action.type){
        case cartItemType:
            return {
                ...state, isAdd:action.payload
            }
            default:
                return state
    }
}
export default  quantityReducer;
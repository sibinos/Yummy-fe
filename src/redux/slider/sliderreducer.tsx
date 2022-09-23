import { sliderType } from "./slidertype";
import { sliderActiontype } from "./slideraction";
type initialStateType={
    array:string[]
    
}
const initialState:initialStateType={
    array:[]
}
function sliderReducer(state=initialState,action:sliderActiontype){
    switch (action.type) {
        case sliderType:
            return{
                ...state,
                array:action.payload
            }
            default: return state
    }
}
export default sliderReducer;



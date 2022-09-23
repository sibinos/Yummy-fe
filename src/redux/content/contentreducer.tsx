import { contentType } from "./contenttype";
import {contentActiontype} from "./contentacttion"

type initialStateType={ 
    content:   {
        productId: number,
        productImage: string,
        productPrice: string,
        productAmount: number,
      }[]
}

const initialState :initialStateType = { 
    content : []
};
function contentReducer(state:initialStateType = initialState, action:contentActiontype){
    switch (action.type) {
        case contentType:
            return({
                ...state, content:action.payload
            });
        default:
            return state;
    }
}
export default contentReducer;
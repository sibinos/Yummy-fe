import { cartItemType } from "./carttype";

type initialStateType={ 
    cartItems:{
        "productId": number,
        "productImage": string,
        "productPrice": string,
        "productAmount": number,
        "count": number,
        "id": number
      }[]
}

const initialState:initialStateType = { 
    cartItems : [],
};
function cartReducer(state = initialState, action:any){
    switch (action.type) {
        case cartItemType:
            return({
                ...state, cartItems:action.payload
            });
        default:
            return state;
    }
}
export default cartReducer;
import { cartItemType } from "./carttype";

export const cartItemtAction=(cartItem:any)=>{
    return {
        type:cartItemType,
        payload:cartItem
    }
}


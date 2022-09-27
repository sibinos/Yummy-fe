import { cartItemType } from "./quantitytype";
export const quantityAction=(isAdd:boolean)=>{
    return{
        type:cartItemType,
        payload:isAdd
    }
}
export type quantityActionType=ReturnType<typeof quantityAction>
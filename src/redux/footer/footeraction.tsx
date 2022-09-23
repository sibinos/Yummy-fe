import { list1,list2 } from "./footertype";
export const footerAction=(items:string)=>{
    return{
        type:list1,
        payload:items
    }
}
export const footerAction2=(items:string)=>{
    return{
        type:list2,
        payload:items
    }
}
export  type footerActionType={
    type:string;
    payload:string[]
}



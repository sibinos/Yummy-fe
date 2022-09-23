import { feedbackItemType } from "./feedbacktype";
export const feedbackItemtAction=(feedbackItem:string)=>{
    return {
        type:feedbackItemType,
        payload:feedbackItem
    }
}


import { sliderType } from "./slidertype";
export const sliderAction=(slider:string)=>{
    return{
        type:sliderType,
        payload:slider
    }
}
export type sliderActiontype={
    type:string;
    payload:any
}
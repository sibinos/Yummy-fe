import { dropdownType } from "./dropdowntype";
import {DropdownInterface} from '../../typescript/interfaces'
export const dropdownAction=(obj:DropdownInterface)=>{
    return {
        type:dropdownType,
        payload:obj
    }
}
export type dropdownActiontype={
    type:string;
    payload:any
}
    

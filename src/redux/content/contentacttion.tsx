import { contentType } from "./contenttype";
import {ContentType} from '../../typescript/interfaces'
export const contentAction=(content:ContentType)=>{
    return {
        type:contentType,
        payload:content
    }
}
export type contentActiontype={
    type: string,
    payload:any
}
import { Dispatch } from "redux";
import {feedbackItemtAction} from '../redux/feedback/feedbackaction'

export function fetchFeedbackData(){
    return (dispatch:Dispatch)=>{
        fetch(`${process.env.REACT_APP_URL}/feedback`)
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            dispatch(feedbackItemtAction(data))
        })
    }
}
import './feedback.css'
import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StateType } from '../../redux/store'
import {fetchFeedbackData} from '../../API/feedbackapi'
import {FeedbackProps} from '../../typescript/interfaces'
function Feedback(props:FeedbackProps){
    const feedbackItems=useSelector((state:StateType)=>{return state.feedbackReducer.feedbackItems})
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch<any>(fetchFeedbackData())
    },[dispatch,props.values])
    return(
        <div className='feedback'>
            <div>
                <h3>FEEDBACK</h3>
                    {feedbackItems.map((value:{comment:string})=><p>{value.comment}<br/><br/></p>)}   
            </div>
        </div>
    );
}
export default Feedback;
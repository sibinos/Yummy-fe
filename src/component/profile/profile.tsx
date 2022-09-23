import { useState } from "react";
import Feedback from "../feedback/feedback";
import './profile.css'
function Profile(){
    const[feedback,setfeedback]=useState({comment:""})
    const[values,setvalues]=useState({comment:''})
    const inputvalue=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setfeedback({comment:e.target.value})
    }
    const submit=()=>{
        fetch(`${process.env.REACT_APP_URL}/feedback`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(feedback),
        })
        .then(res=>res.json())
        .then(data=>setvalues(data))
        setfeedback({comment:""})
    }
    return(
        <div className="profile">
            <h1>welcome to profile</h1>
            <form>
                Enter your feedback <input  type="text" value={feedback.comment} onChange={inputvalue} ></input>
                <input type="button" value="submit" onClick={submit}></input>
            </form><br/><br/><br/>
            <Feedback values={values}/>
        </div>
    );    
}
export default Profile;
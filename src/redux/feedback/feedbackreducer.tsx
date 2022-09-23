import { feedbackItemType } from "./feedbacktype";
type initialType={ 
    feedbackItems:string[]
}
const initialState:initialType = { 
    feedbackItems : [],
};
function feedbackReducer(state = initialState, action:any){
    switch (action.type) {
        case feedbackItemType:
            return({
                ...state, feedbackItems:action.payload
            });
        default:
            return state;
    }
}
export default feedbackReducer;
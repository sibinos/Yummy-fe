import { dropdownType } from "./dropdowntype";
import {DropdownInterface} from '../../typescript/interfaces'
import {dropdownActiontype} from "./dropdownacttion"
type dropdownstatetype={
    obj:DropdownInterface[]
}
const initialState:dropdownstatetype = { 
    obj : []
};
function dropdownReducer(state = initialState, action:dropdownActiontype){
    switch (action.type) {
        case dropdownType:
            return({
                ...state, obj:action.payload
            });
        default:
            return state;
    }
}
export default dropdownReducer;
import { combineReducers } from "redux";
import contentReducer from "./content/contentreducer";
import dropdownReducer from "./dropdown/dropdownreducer";
import sliderReducer from "./slider/sliderreducer";
import FooterReducer from "./footer/footerreducer";
import LoginReducer from "./login/loginreducer";
import cartReducer from "./cart/cartreducer";
import feedbackReducer from './feedback/feedbackreducer';
import quantityReducer from "./common/quantityreducer";

export const Reducer=combineReducers({contentReducer,dropdownReducer,sliderReducer,FooterReducer,LoginReducer,cartReducer,feedbackReducer,quantityReducer})
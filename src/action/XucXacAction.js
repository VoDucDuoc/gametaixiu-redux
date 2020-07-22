
import {PLAY, CHOOSE} from "../constants/XucXacConstants";
export const chooseAction = (name) =>{
    return {
        type: CHOOSE,
        text: name,
    }
}

export const playAction = () =>{
    return{
        type: PLAY,
    }
}
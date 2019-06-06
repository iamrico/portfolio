import {ADD_SKILL} from "../constants/action-types";

const initialState = {
    skills:{
        languages:['Java', 'Python','C','PHP'],
        databases:['MySQL','Cloud Firestore','Firebase Realtime Database','Google Cloud Datastore'],
        tools:['Angular','React','Redux','React Native','Flask','GraphQL','TypeScript','Javascript','ES6','REST Api','Gatsby.js']
    }
}

function rootReducer(state=initialState, action){
    if(action.type === ADD_SKILL){
        return Object.assign({},state,{skills:state.skills.concat(action.payload)});
    }
    return state;
}

export default rootReducer;
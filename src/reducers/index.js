import {ADD_SKILL} from "../constants/action-types";

const initialState = {
    skills:{
        languages:['Java', 'Python','C','PHP'],
        databases:['MySQL','Cloud Firestore','Firebase Realtime Database','Google Cloud Datastore'],
        tools:['React','Redux','React Native','Node JS','Flask','GraphQL','Angular','TypeScript','Javascript','ES6','REST Api','Gatsby.js'],
        ctech:['Amazon Web Services (Route 53, s3)','Google Cloud Platform']
    },
    projects:[
        {
            repo:"https://github.com/iamrico/ItineraryApp",
            projId:1,
            projName: "Lakbay",
            tools:['React','Firebase','Material Design','ES6'],
            description:"Lakbay is a chrome extension that lets you add your experiences from your trips and whatever you post, gets shared with the world! Use this application to recommend itineraries to your friends when they visit countries."
        }
    ]
}

function rootReducer(state=initialState, action){
    if(action.type === ADD_SKILL){
        return Object.assign({},state,{skills:state.skills.concat(action.payload)});
    }
    return state;
}

export default rootReducer;
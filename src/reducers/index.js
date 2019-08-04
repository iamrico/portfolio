import {ADD_SKILL} from "../constants/action-types";
import pic1 from "../assets/lakbaysc.PNG";
import pic2 from "../assets/sanles.png";
import pic3 from '../assets/wooo.jfif';

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
            pic:pic1,
            projName: "Lakbay",
            tools:['React','Firebase','Material Design','ES6'],
            description:"Lakbay is a chrome extension that lets you add your experiences from your trips and whatever you post, gets shared with the world! Use this application to recommend itineraries to your friends when they visit countries."
        },
        {
            repo:"https://github.com/Zeshiba/SanlesStore-POS",
            projId:2,
            projName: "Sanles(Inventory System)",
            pic: pic2,
            tools:['Angular','Play!','Material Design','TypeScript'],
            description:"Written for a school project back in the day, this app was created for a local business to track sales and manage business. "
        },
        {
            repo:"https://github.com/jacklaurencegaray/wooo-web",
            projId:2,
            projName: "Wooo",
            pic: pic3,
            tools:['React','React Native','MobX','ES6'],
            description:"A school project. I was in charge of handling the Front End Development, mainly the Matching module, based on designs created by our teammate.I also connected the endpoints from the backend as well."
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
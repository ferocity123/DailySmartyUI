import { SET_RECENT_POST } from "../actions/types";
import recentPost from "../components/recentPost";


const INIT_STATE = {
    post: [],
    recentPost: []
}

export default function (state= INIT_STATE, action) {
    switch (action.type) {
        case SET_RECENT_POST:

          return [...state, recentPost: action.payload]
        default:
            return state;
    }
}
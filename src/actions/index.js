import { SET_RECENT_POST } from "./types";

import axios from "axios";


export function fetchRecentPosts() {
    return function(dispatch) {
       axios.get('https://api.dailysmarty.com/posts')
       .then( response => {
           console.log(response.data.posts);
           dispatch({
               type: SET_RECENT_POST,
               payload: response.data.posts
           })
       })
    }
}
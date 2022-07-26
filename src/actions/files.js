import {GET_FILES} from './types.js';
import axios from 'axios';

//GET FILES
export const getFiles = () => dispatch => {
    axios
        .get('/api/document/')
        .then(res => {
            dispatch({
                type: GET_FILES,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};
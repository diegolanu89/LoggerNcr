import axios from 'axios';
import {GET_LEADS, DELETE_LEADS, ADD_LEADS, GET_ERRORS} from './types.js';
import {createMessage} from './mesagges.js';

//GET_LEADS
export const getLeads = () => dispatch => {
    axios
        .get('api/cv/')
        .then(res => {
            dispatch({
                type: GET_LEADS,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};

//DELETE_LEADS
export const deleteLeads = (id) => dispatch =>{
        var ruta = '/api/cv/' + id + '/';
        console.log("RUTA=" + ruta);
        axios   
            .delete(ruta)
            .then(res =>{
                    dispatch(createMessage({leadDelete : 'Contact Delete'}));
                    dispatch({
                        type:DELETE_LEADS,
                        payload: id
                    });
            })
            .catch(err =>console.log(err));
}

//ADD_LEADS
export const addLeads = (lead) => dispatch =>{
    axios
        .post('/api/cv/', lead)
        .then(res=>{
            dispatch(createMessage({leadAdd : 'Contact Created'}));
            dispatch({
                type: ADD_LEADS,
                payload: res.data
            });
        })
        .catch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch({
                type: GET_ERRORS,
                payload: errors
            });
        }); 
}


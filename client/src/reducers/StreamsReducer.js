import _ from 'lodash'

export default (state = {}, action ) => {
    
    switch (action.type) {
        case  'GET_STREAMS':
            return { ...state, ..._.mapKeys(action.payload, "id") }
        case  'GET_STREAM':
            return { ...state, [action.payload.id]: action.payload };
        case 'CREATE_STREAM':
            return { ...state, [action.payload.id]: action.payload };
        case 'EDIT_STREAM':
            return { ...state, [action.payload.id]: action.payload };
        case 'DELETE_STREAM':
            return _.omit(state, action.payload); // will return an ( obj ) of data except for the  action.payload
        // case '':
        //     return ;
        default:
            return state;
    }    


};



//? ==> action types
// GET_STREAMS
// CREATE_STREAM
// GET_STREAM
// EDIT_STREAM
// DELETE_STREAM
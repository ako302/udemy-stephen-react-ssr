import {FETCH_ADMINS} from '../action/';

export default (state=[], action) => {
    switch(action.type) {
        case FETCH_ADMINS:
            return action.payload.data || false;
        default:
            return state;
    }
}
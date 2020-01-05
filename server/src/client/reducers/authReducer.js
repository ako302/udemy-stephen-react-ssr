import { FETCH_CURRENT_USER} from '../action';

export default function(state = null, action) {
    switch(action.type) {
        case FETCH_CURRENT_USER:
            return action.payload.data || false;
        default: 
            return state;
    }
}
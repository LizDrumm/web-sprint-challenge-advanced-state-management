import { 
    FETCH_SMURFS, 
    FETCH_SMURFS_SUCCESS, 
    FETCH_SMURFS_ERROR,
    POST_SMURFS,
    POST_SMURFS_SUCCESS,
    POST_SMURFS_ERROR
} from '../actions';

const initialState = {
    smurfs: [],
    loadingSmurfs: false,
    errorMessage: "",
};


export default (state = initialState, action) => { 
    switch(action.type){
        case FETCH_SMURFS: 
            return {
                ...state,
                loadingSmurfs: true
            };
        case FETCH_SMURFS_ERROR:
            return {
                ...state,
                loadingSmurfs: false,
                errorMessage: action.payload.message
            };
        case FETCH_SMURFS_SUCCESS:
            return{
                ...state,
                smurfs: action.payload,
                loadingSmurfs: false
            };
        case POST_SMURFS:
            return {
               ...state,
              smurfs: action.payload,
            }
        case POST_SMURFS_SUCCESS:
                return {
                    ...state,
                    loadingSmurfs: false,
                    errorMessage: action.payload.message
                }
        case POST_SMURFS_ERROR:
                return {
                    ...state,
                    loadingSmurfs: false,
                    errorMessage: action.payload.message
                    }
        default:
        return state;
    };
    };
    
    
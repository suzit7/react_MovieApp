const initialApiCall = {
    loading : false,
    posts : []
}

const apiCallReducers = (state = initialApiCall, action)=>{
    switch(action.type){


        case "LOAD_POST_START":
            return{
                ...state,
                loading : true,
            }

        case "LOAD_POST_SUCCESS":
            return{
                ...state,
                posts : action.payload
            }

          
            default :
            return state;
    }
}








export {apiCallReducers}
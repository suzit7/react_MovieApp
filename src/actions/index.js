// API SAGA 

export const loadPostStart = () => {
    return{
    type : 'LOAD_POST_START',

}};


export const loadPostSuccess = (posts) => {
    return{
    type : 'LOAD_POST_SUCCESS',
    payload : posts

}};
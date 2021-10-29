import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { loadPostStart } from "./actions";

const Test = ()=>{

    const dispatch = useDispatch();
 const stateapi= useSelector((state) => state.apiCallReducers.posts)

//  const fetchPost = ()=>{
//      dispatch(loadPostStart());
//  };

 useEffect(()=>{
    dispatch(loadPostStart());
 })



  
return(
    <>
    <div style = {{textAlign : 'center'}}>
<h1>Api call using Saga</h1>
{/* <button onClick = {fetchPost}>Fetch Api</button> */}
<div>
{
        stateapi.map((ele, ind)=>{
            return(
                <div key = {ind}> 
            <h3>{ele.title} </h3>
            </div>
            );
        })
    }
    </div>
</div>

    </>
);
}

export default Test;
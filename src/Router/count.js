import React from "react";
import { Link, Outlet } from "react-router-dom";
function Count(){
    const [count,setCount]=React.useState(0);
    function inc(){
        setCount(count+1);
    }
    function dec(){
        if(count>0){
            setCount(count-1);
        }
    }
    return(<div>
        <div>Count:{count}</div>
        <button onClick={()=>{inc()}}>increment</button>
        <button onClick={()=>{dec()}}>decrement</button>
        <Outlet></Outlet>
    </div>)
}
export default Count;
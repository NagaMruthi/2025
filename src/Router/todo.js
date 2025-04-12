import React from "react";
function Todo(){
    const[x,setX]=React.useState([
        {
            Name:"",
            Mobile:"",
            Email:""
        }
    ]);
    function handlechange(){
    alert("submit data");
    }
    return(<div>Todo_List
        <div>
            <form>
                <label>Name:</label>
                <input placeholder="Enter Name" name="Name" value={x.Name} onChange={handlechange} required></input>
                <br></br>
                <label>Number:</label>
                <input placeholder="Mobile Number" name="Mobile" value={x.Mobile} onChange={handlechange} required></input>
                <br></br>
                <label>Email:</label>
                <input placeholder="Email" name="Email" value={x.Email} onChange={handlechange} required></input>
                <br></br>
                <button type="submit">submit</button>
            </form>
        </div>
    </div>)
}
export default Todo;
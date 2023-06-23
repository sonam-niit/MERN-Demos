import React, { useState } from "react";

export function Student(){

    const [userName,setUserName]=useState("Sonam Soni");

    function changeHandler(e){
        setUserName(e.target.value)
    }

    // function change(){
    //     console.log(name);
    // }
    return(<>
        <h1 className="text-center mt-3">Student Page</h1>

        <input type="text" onChange={changeHandler} placeholder="Enter Name"
        value={userName}></input>
        <h3 className="text-center">Welcome {userName}</h3>
    </>)
}
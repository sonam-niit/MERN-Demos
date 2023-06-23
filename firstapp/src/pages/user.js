import React, { useState } from "react";
import { UserList } from "./userlist";

export function UserData(){

    const [users,setUsers]=useState([]);
    const [user,setUser]=useState({fname:'',lname:'',email:'',country:''});

    const changeHandler=(e)=>{
        setUser((user)=>({
            ...user,[e.target.name]:e.target.value
        }))
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        users.push(user);
        setUsers(users);
        console.log(users);
        setUser({fname:'',lname:'',email:'',country:''});
    }
    return (<>
        <form onSubmit={submitHandler}>
            <input type="text" name="fname" placeholder="Enter FirstName"
            value={user.fname} onChange={changeHandler}></input>
            <br/><br/>
            <input type="text" name="lname" placeholder="Enter LastName"
            value={user.lname} onChange={changeHandler}></input>
            <br/><br/>
            <input type="text" name="email" placeholder="Enter EmailId"
            value={user.email} onChange={changeHandler}></input>
            <br/><br/>
            <input type="text" name="country" placeholder="Enter Country"
            value={user.country} onChange={changeHandler}></input>
            <br/><br/>
            <button type="submit"> Save</button>
            <hr/>
            <UserList data={users}></UserList>
        </form>
    </>);

}
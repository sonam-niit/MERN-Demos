import React from "react";

export function UserList(props){

    const data= props.data;

    const tabRow=data.map((user,i)=>{
        return (
            <tr key={i}>
                <td>{user.fname}</td>
                <td>{user.lname}</td>
                <td>{user.email}</td>
                <td>{user.country}</td>
            </tr>
        )
    })
    return(<>
            <h1>User List Component</h1>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th><th>Last Name</th>
                        <th>Email</th><th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {tabRow}
                </tbody>
            </table>
    </>)
}
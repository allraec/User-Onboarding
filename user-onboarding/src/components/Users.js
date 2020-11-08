import React from "react";

const Users = props => {
    if (props.users.length === 0){
        return <div></div>
    }
    else{
        return (
            props.users.map(user => {
                return(
                    <div className="card" key={user.id}>
                        <h2>{user.name}</h2>
                    </div> 
                )
            }
        ))        
        
    }
}

export default Users;
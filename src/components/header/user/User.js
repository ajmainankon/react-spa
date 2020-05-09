import React from 'react';
import "./User.css"

const User = (props) => {
    const { first_name, last_name, photo, email, id, income, address, gender} = props.user
    // console.log(props)
    return (
        <div className="user">
            <div>
                <img src={photo} alt=""/>
            </div>
            <div>
                <h4>ID no. {id}</h4>
                
                <h4>First Name: {first_name}</h4>
                <h4>Last Name: {last_name}</h4>
                <h4>Gender: {gender}</h4>
                <h4>Yearly Income: {income}</h4>
                <h4>Email: {email}</h4>
                <h4>Address: {address}</h4>
                
                
               
                <button onClick={ ()=> props.handleAddUser(props.user)
            }>
                    Add Friend
                </button>
            </div>
    
   
        </div>
        
    );
};

export default User;





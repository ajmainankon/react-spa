import React, { useState } from 'react';
import data from "../../../MOCK_DATA.json"
import User from '../user/User';
import Count from '../count/Count';
import "./Body.css"

const Body = () => {
    const fakeData = data.slice(0,15)
    const [users, setUsers] = useState(fakeData)
    const [count, setCount] = useState([])
    
    const handleAddUser = (user) => {
    const newCount = [...count, user];
    setCount(newCount);
    };
    return (
         <div className="forFlex">
          <div className= "infoSide">
          {
            users.map((username) => (<User handleAddUser=
            {handleAddUser} user={username}></User>))} 
          </div>
          <div className= "countSide">
          < Count count= {count}> </Count>
          </div>
        </div>
          
    );
};

export default Body;





// user>{username}


{/* <div className="forFlex">
          <div className= "infoSide">
          {
            users.map(username => <User user>{username}</User>)
           } 
          </div>
          <div className= "countSide">
          < Count></Count>
          </div>
        </div> */}
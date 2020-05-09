import React from 'react';
import "./Count.css"

const Count = (props) => {
    let userAdded = " "
    let annualSalary = 0
    const count = props.count
    count.map((element)=>(
        userAdded = element.first_name + " , " + userAdded,
        annualSalary = parseInt(element.income) + annualSalary
    
       
    ))

    
    
    
    return (
        <div>
            <h4>Total friend added: {count.length}</h4>
            <p>Name of friend added: {
                userAdded
        
        
        }
        </p>
    <h4>Total yearly salary of the guys added: {annualSalary}</h4>
        </div>
    );
};

export default Count;
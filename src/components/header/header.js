import React from 'react';
import './header.css';


function header() {
  return (
    <div className= "Header">
      <h1>Add Friends</h1>
      <nav>
        
        <a href="/home">Home</a>
        <a href="/profile">Profile</a>
        <a href="/help">Help</a>
      </nav>
    </div>
  );
}

export default header;

import React from 'react';

import './UserOutput.css';


const userOutput = (props) => {
    return (
        <div className={"UserOutput"}> 
            <p> Hei! sa {props.userName}</p>
            <p> Halla!</p>
       </div>
    )
};

export default userOutput;
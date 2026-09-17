import React from 'react';
import Welcome from "./Welcome";

const Greetings = () => {
    return (
        <div>
            <h1>Greetings Component</h1>
            <Welcome name="Dilara" style={{color: "green"}}/>
            <Welcome name="Burak"/>
        </div>
    );
};

export default Greetings;
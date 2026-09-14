import React from 'react';

const JsxLoop = () => {
    const names = ['Alice', 'Bob', 'Charlie', 'Burak', 'Dilara'];
    return (
        <div>
            <ul>
                {names.map((name,index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
};

export default JsxLoop;
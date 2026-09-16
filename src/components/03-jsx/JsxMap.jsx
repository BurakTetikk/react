import React from 'react';
import countries from './countries.json';
import './JsxMap.css';

const JsxMap = () => {


    return (
        <table className="table">
            <thead>
            <tr>
                <th>No</th>
                <th>Name</th>
                <th>Code</th>
            </tr>
            </thead>
            <tbody>
            {countries.map((country, index) => (
                <tr key={index}>
                    <td className="td">{index + 1}</td>
                    <td className="td">{country.name}</td>
                    <td className="td">{country.code}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default JsxMap;
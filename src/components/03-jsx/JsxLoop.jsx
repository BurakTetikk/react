import React from 'react';

const JsxLoop = () => {
    const names = ['Alice', 'Bob', 'Charlie', 'Burak', 'Dilara'];
    const cities = [
        "İstanbul",
        "Ankara",
        "İzmir",
        "Bursa",
        "Antalya",
        "Trabzon",
        "Eskişehir",
        "Gaziantep",
        "Adana",
        "Konya",
        "Zonguldak",
        "New York",
        "Londra",
        "Paris",
        "Tokyo",
        "Roma",
        "Berlin",
        "Madrid",
        "Amsterdam",
        "Dubai",
        "Sydney",
        "Toronto",
        "Moskova",
        "Seul",
        "Barcelona"
    ];

    return (
        <div>
            <ul>
                {names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>

            <select>
                {cities.map((city, index) => (
                    <option key={index}>{city}</option>
                ))}
            </select>
        </div>
    );
};

export default JsxLoop;
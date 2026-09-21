import React, {useEffect, useState} from 'react';
import {Spinner} from "react-bootstrap";
import axios from "axios";

const CountriesAxios = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadData = async () => {
        const response = await axios.get('https://67cbbcec3395520e6af62733.mockapi.io/api/v1/users');
        console.log(response);
        setUsers(response.data);
        setLoading(false);
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            {loading && <Spinner animation="border" variant="primary"/>}
            {!loading && users.map(user => <div key={user.id}>{user.name}</div>)}
        </div>
    );
};

export default CountriesAxios;
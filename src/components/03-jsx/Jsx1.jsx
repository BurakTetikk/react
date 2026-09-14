import React from 'react';

const Jsx1 = () => {
    const message = 'Bu mesaj JSX ile oluşturuldu.';
    const user = {
        name: 'John Doe',
        age: 30,
        email: 'johndoe@example.com'
    };
    return (
        <div>
            {message}
            <p>USER</p>
            <ul>
                <li>Name: {user.name}</li>
                <li>Age: {user.age}</li>
                <li>Email: {user.email}</li>
            </ul>
        </div>
    );
};

export default Jsx1;
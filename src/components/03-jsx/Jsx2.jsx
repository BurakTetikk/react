import React from 'react';
import AdminMenu from "./AdminMenu";
import UserMenu from "./UserMenu";

const Jsx2 = () => {
    const isAdmin = true;
    return (
        <div>
            {isAdmin ? <AdminMenu/> : <UserMenu/>}
        </div>
    );
};

export default Jsx2;
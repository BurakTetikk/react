import React from 'react';
import {Link} from "react-router-dom";

const Menu = () => {
    return (
            <nav>
                <ul>
                    <li><Link to="/hello-world">Hello World</Link></li>
                    <li><Link to="/hello-react">Hello React</Link></li>
                    <li><Link to="/exchange">Exchange</Link></li>
                    <li>JSX</li>
                </ul>
            </nav>
    );
};

export default Menu;
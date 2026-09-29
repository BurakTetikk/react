import React, {useContext} from 'react';
import StoreContext from "../../store";
import './topbar.scss';

const Topbar = () => {
    const {currencies} = useContext(StoreContext);

    const formatCurrencies = (val) => {
        return (1 / currencies[val]).toFixed(2);
    }

    return (
        <header className="topbar">
            <nav>
                <h3>Exchange</h3>
                <div>
                    <span>$ {formatCurrencies('USD')}₺</span>
                    <span>|</span>
                    <span>€ {formatCurrencies('EUR')}₺</span>
                </div>
            </nav>
        </header>
    );
};

export default Topbar;
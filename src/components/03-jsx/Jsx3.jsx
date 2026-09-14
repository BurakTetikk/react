import React from 'react';

const Jsx3 = () => {
    const age = 30;
    return (
        <div>
            {age >= 18 && <h2>Ehliyet alabilir.</h2>}
            {age >= 18 || <h2>Ehliyet alamaz.</h2>}
        </div>
    );
};

export default Jsx3;
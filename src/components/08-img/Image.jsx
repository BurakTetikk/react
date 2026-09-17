import React from 'react';
import profile from "../../assets/img/img.png"
const Image = () => {
    return (
        <div>
            {/* Static yöntemde image dosyalarına "public" klasöründen bakmaya başlar*/}
            <img src="assets/img/img.png" alt=""/>

            <img src={profile} alt=""/>

        </div>
    );
};

export default Image;
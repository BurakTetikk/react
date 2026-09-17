import React from 'react';
import images from './images.json';

const Gallery = () => {
    return (
        <div className="gallery">
            {images.map((image, index) => (
                <div>
                    <a href={require(`../../assets/img/${image.name}`)}><img key={index}
                                                                             src={require(`../../assets/img/${image.name}`)}
                                                                             alt={`Image ${index + 1}`}/>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Gallery;
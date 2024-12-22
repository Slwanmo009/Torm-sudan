import React, { useState, useEffect } from 'react';

const RegionCard = ({ regionName, images }) => {
	    const [currentImageIndex, setCurrentImageIndex] = useState(0);

	    useEffect(() => {
		            const interval = setInterval(() => {
				                setCurrentImageIndex((currentImageIndex + 1) % images.length);
				            }, 3000); // Change image every 3 seconds

		            return () => clearInterval(interval);
		        }, [currentImageIndex, images.length]);

	    return (
		            <div className="region-card">
		                <h3>{regionName}</h3>
		                <img src={images[currentImageIndex]} alt={regionName} className="region-img" />
		            </div>
		        );
};

export default RegionCard;


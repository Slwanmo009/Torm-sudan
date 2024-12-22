import React from 'react';
import RegionCard from './RegionCard';

const regions = [
	    { name: 'Region 1', images: ['images/region1_1.jpg', 'images/region1_2.jpg', 'images/region1_3.jpg'] },
	    { name: 'Region 2', images: ['images/region2_1.jpg', 'images/region2_2.jpg', 'images/region2_3.jpg'] },
	    { name: 'Region 3', images: ['images/region3_1.jpg', 'images/region3_2.jpg', 'images/region3_3.jpg'] },
	    { name: 'Region 4', images: ['images/region4_1.jpg', 'images/region4_2.jpg', 'images/region4_3.jpg'] },
	    { name: 'Region 5', images: ['images/region5_1.jpg', 'images/region5_2.jpg', 'images/region5_3.jpg'] },
	    { name: 'Region 6', images: ['images/region6_1.jpg', 'images/region6_2.jpg', 'images/region6_3.jpg'] },
	    { name: 'Region 7', images: ['images/region7_1.jpg', 'images/region7_2.jpg', 'images/region7_3.jpg'] },
	    { name: 'Region 8', images: ['images/region8_1.jpg', 'images/region8_2.jpg', 'images/region8_3.jpg'] },
];

const RegionGrid = () => {
	    return (
		            <div className="region-grid">
		                {regions.map((region, index) => (
					                <RegionCard key={index} regionName={region.name} images={region.images} />
					            ))}
		            </div>
		        );
};

export default RegionGrid;


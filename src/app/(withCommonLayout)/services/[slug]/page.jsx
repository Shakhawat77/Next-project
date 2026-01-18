import React from 'react';

const serviceDetailsPage = async({params}) => {
    const {slug}= await params;
    console.log(slug)
    return (
        <div>
            service details servicesPage {slug}
        </div>
    );
};

export default serviceDetailsPage;
import React from 'react';
import notFound from '../../Images/404.png';

const NotFound = () => {
    return (
        <div>
            <img src={notFound} alt="404" className="w-100" />
        </div>
    );
};

export default NotFound;
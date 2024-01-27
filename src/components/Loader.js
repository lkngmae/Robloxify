import React, { useState, useEffect } from 'react';
import LoadingSection from './LoadingSection';
/*Determines whether to return the loader screen*/

function Loader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
        setIsLoading(false);
    }, 2000);
    }, []);

    if (isLoading) {
    return <LoadingSection />;
    }

    return (
    <div>
        <h1>soon this will be a link to a data page</h1>
    </div>
    );
}

export default Loader;
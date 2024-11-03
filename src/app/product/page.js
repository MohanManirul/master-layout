'use client'
import React from 'react';

import { useSearchParams } from 'next/navigation';
 
const page = () => {
    const searchParams = useSearchParams();
    const name = searchParams.get('name')
    return (
        <div>   
              
            <p>This is product page</p>
            {name}
        </div>
    );
};

export default page;
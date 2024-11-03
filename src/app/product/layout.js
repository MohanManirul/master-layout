import Link from 'next/link';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <h2>This is product directory</h2>
            {children}
            <ul  className="nav">

                    <li  className="nav-item">
                        <Link className="nav-link" href={"/"}>Product</Link>
                    </li>

                    <li  className="nav-item">
                        <Link className="nav-link" href={{ pathname:"/product" , query:{name:'laptop'} }}>Product2</Link>
                    </li>

                    </ul>
        </div>
    );
};

export default layout;
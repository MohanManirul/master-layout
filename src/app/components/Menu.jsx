'use client'
import React from 'react';
import Link from 'next/link';
const Menu = () => {
    return ( 
        <div>
            <ul  className="nav">

                <li  className="nav-item">
                    <Link className="nav-link" href={"/"}>Home</Link>
                </li>

                <li  className="nav-item">
                    <Link className="nav-link" href={{ pathname:"/product" , query:{name:'laptop'} }}>Product</Link>
                </li>

                <li  className="nav-item">
                    <Link className="nav-link" href={"/mission"} replace>Mission</Link>
                </li >

                <li  className="nav-item">
                    <Link  className="nav-link" href={"/vission"} prefetch={false}>Vission</Link>
                </li>

                <li className="nav-item">
                    <Link  className="nav-link" href={"/login"}>Login</Link>
                </li>

                <li  className="nav-item">
                    <Link  className="nav-link" href={"/dashboard"}>Dashboard</Link>
                </li>



            </ul>        
            
        </div>
    );
};

export default Menu;
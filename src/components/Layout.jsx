import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Hero from './Hero';
import Footer from './Footer';

const Layout = () => {
    return (

        <div>
            <div className='max-w-6xl mx-auto'>
                <Header></Header>
                <Hero></Hero>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;
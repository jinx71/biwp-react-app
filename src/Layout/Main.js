import React from 'react';
import { Outlet } from 'react-router-dom';
import Background from '../Component/Root/Background';
import Footer from '../Component/Shared/Footer/Footer';
import Navigation from '../Component/Shared/Navigation/Navigation';




const Main = () => {
    return (
        <>
            <Background>
                <Navigation></Navigation>
                <Outlet></Outlet>

            </Background>
            <Footer></Footer>

        </>
    );
};

export default Main;
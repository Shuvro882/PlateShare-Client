import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { ClimbingBoxLoader } from 'react-spinners';

const MainLayout = () => {
    const navigation = useNavigation();  // get current navigation state
    const isLoading = navigation.state === 'loading';

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1">
                {isLoading ? (
                    <div className="h-[70vh] flex items-center justify-center">
                        <ClimbingBoxLoader color="#ff7300" size={28} />
                    </div>
                ) : (
                    <Outlet />
                )}
            </main>

            <Footer />
        </div>
    );
};

export default MainLayout;
import React from 'react';
import Banner from './Banner';
import FeatureFood from './FeatureFood';
import ExtraSection from './ExtraSection';
import { useLoaderData } from 'react-router';

const Home = () => {
    const food = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <FeatureFood food={food}></FeatureFood>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;
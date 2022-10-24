import React from 'react';
import Scroll from '../components/Scroll';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import MapBase from '../components/MapBase';


const Map = () => {
      
    return (
        <main>
            <div className="widget">
                <Navigation />
                <Logo />
                <MapBase/>
                <Scroll left={'/membres'} right={'/structure'} />
            </div>
        </main>
    );
    };
export default Map;
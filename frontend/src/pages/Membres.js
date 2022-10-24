import React from 'react';
import Scroll from '../components/Scroll';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Connexion from '../components/Connexion';
import Inscription from '../components/Inscription';


const Membres = () => {
    return (
        <main>
            <div className="widget">
                <Navigation />
                <Logo />
                <Connexion/>
                <Inscription/>
                <Scroll left={'/presentation'} right={'/map'} />
            </div>
        </main>
    );
};

export default Membres;
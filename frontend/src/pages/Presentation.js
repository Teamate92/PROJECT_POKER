import React from 'react';
import Scroll from '../components/Scroll';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import "../style/pages/_presentation.scss";

const Presentation = () => {

    return (
        <main>
            <div className="widget">
                <Navigation />
                <Logo/>
                <div className="titre">
                    <h1 align="center"> Présentation du Bureau ECE Poker 2021-2022 </h1>
                </div>
                <div className="row">
                    <div className="column">
                        <img className="images" src="https://photosecepoker.s3.eu-west-3.amazonaws.com/PP-CorentinR.jpg" alt="photo1"></img>
                        <h3 align="center">Corentin Rozenblum</h3>
                    </div>
                    <div className="column">
                    <img className="images" src="https://photosecepoker.s3.eu-west-3.amazonaws.com/PP-ArnaudM.jpg" alt="photo2"></img>
                        <h3 align="center">Arnaud Meilhoc</h3>
                    </div>
                    <div className="column">
                        <img className="images" src="https://photosecepoker.s3.eu-west-3.amazonaws.com/PP-MatthieuB.jpg" alt="photo3"></img>
                        <h3 align="center">Matthieu Brax</h3>
                    </div>
                    <div className="column">
                        <img className="images" src="https://photosecepoker.s3.eu-west-3.amazonaws.com/PP-CamilleV.jpg" alt="photo4"></img>
                        <h3 align="center">Camille Vittiglio</h3>
                    </div>
                    <div className="column">
                        <img className="images" src="https://photosecepoker.s3.eu-west-3.amazonaws.com/PP-AntoineC.jpg" alt="photo5"></img>
                        <h3 align="center">Antoine Cruveilher</h3>
                    </div>
                    <div className="column">
                        <img className="images" src="https://photosecepoker.s3.eu-west-3.amazonaws.com/PP-AntoineG.jpg" alt="photo6"></img>
                        <h3 align="center">Antoine Gourlaouen</h3>
                    </div>
                    <div className="column">
                        <img className="images" src="https://photosecepoker.s3.eu-west-3.amazonaws.com/PP-RichardL.jpg" alt="photo7"></img>
                        <h3 align="center">Richard Lhuissier</h3>
                    </div>
                    <div className="column">
                    <img className="images" src="https://photosecepoker.s3.eu-west-3.amazonaws.com/PP-PaulP.jpg" alt="photo8"></img>
                        <h3 align="center">Paul Perrin</h3>
                    </div>
                </div>
                <Scroll left={'/'} right={'/membres'} />
            </div>
        </main>
    );
};

export default Presentation;
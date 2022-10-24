import React from 'react';

//Réseaux affichés en haut à droite de la page d'accueil
const Réseaux = () => {

    //Animation quand on passe la souris sur les icones
    const anim = () => {
        let navLinks = document.querySelectorAll('.social-network a');

        navLinks.forEach(link => {
            link.addEventListener('mouseover', (e) => {
                let attrX = e.offsetX - 20;
                let attrY = e.offsetY - 13;

                link.style.transform = `translate(${attrX}px, ${attrY}px)`;
            })
            link.addEventListener('mouseleave', () => {
                link.style.transform = '';
            })
        })
    }
    return (
        <div className="social-network">
            <ul className="content">
            <a href="https://www.facebook.com/ECEPOKER" target="_blank"
                rel="noopener noreferrer" className="hover" onMouseOver={anim}>
                    <li><i className="fab fa-facebook-f"></i></li>
            </a>
            <a href="https://www.twitter.com/ECE_Poker" target="_blank"
                rel="noopener noreferrer" className="hover">
                    <li><i className="fab fa-twitter"></i></li>
            </a>
            <a href="https://www.instagram.com/ecepoker" target="_blank"
                rel="noopener noreferrer" className="hover">
                    <li><i className="fab fa-instagram"></i></li>
            </a>
            </ul>
        </div>
    );
};

export default Réseaux;
### Présentation du Projet

Ce projet est destiné à servir l'Association ECE Poker de l'ECE Paris-Lyon. 
Ce dernier permet de réunir les fonctionnalités nécessaires à l'association, sous la forme de widgets.
Il pourra donc être transmis au Bureau de l'association suivant, afin qu'ils puissent en profiter.


## Fonctionnalités

Ce Dashboard est composé de 6 widgets qui ont des fonctionnalités différentes.
Widget n°0 : (Page d'accueil, présentant le logo de l'association ainsi que le menu de navigation.)<br/>
Widget n°1 : Page de Présentation, montrant chaque élément du Bureau, avec la possibilité de les modifier via une API locale.<br/>
Widget n°2 : Page des Membres, montrant l'ensemble des membres de l'association, avec également la possibilité de modifier.<br/>
Widget n°3 : Page Map, utilisant l'API Google MAP pour montrer où se déroulent les tournois.<br/>
Widget n°4 : Page Sondages, permettant à nos membres de nous donner un retour via un vote, le résultat étant sous la forme d'un graphe.<br/>
Widget n°5 : Page Structure, permettant de lancer une horloge annonçant les changements de blindes.<br/>
Widget n°6 : Page Contact, permettant de nous envoyer un email dans le cadre d'une demande liée à un évènement ou un partenariat.<br/>


### Pré-requis

Voici les pré-requis que vous devez installer afin de lancer notre projet.
* npm<br/>
  npm install npm@latest -g<br/>
  yarn install<br/>
  yarn upgrade --latest react-scripts<br/>


### Lancement

Afin de lancer notre projet, il faudra écrire plusieurs lignes de commande dans les terminaux :<br/>
Pour lancer l'application backend => 1) cd .\backend\ <br/>
                                     2) yarn nodemon .\server.js <br/>
Pour lancer l'application frontend => 1) cd .\frontend\ <br/>
                                      2) npm start <br/>

## Contributions

Les contributions à ce projet sont **appréciées**.

Si vous avez des suggestions d'amélioratio, n'hésitez pas à fork le reposetory et créer une demande de pull. Merci !

1. Forker le Projet
2. Créer votre propre branche(`git checkout -b feature/SuperFeature`)
3. Commit vos changements (`git commit -m 'Add some SuperFeature'`)
4. Push sur la branche (`git push origin feature/SuperFeature`)
5. Ouvrir une demande de Pull


## Ressources

Voici une liste des ressources qui nous ont été utiles durant la réalisation de notre projet.

* [Réalisation d'un site vitrine](https://www.youtube.com/watch?v=slzhcco9Cog&list=WL&index=3&ab_channel=FromScratch-D%C3%A9veloppementWeb)
* [Sondages](https://w3collective.com/poll-component-react-node/)
* [Horloge Poker](https://github.com/vincentp/poker-clock)
* [EmailJS](https://dashboard.emailjs.com/admin)
* [Graphique Camembert](https://www.youtube.com/watch?v=c_9c5zkfQ3Y&ab_channel=WornOffKeys)
* [Google Map](https://dev.to/jessicabetts/how-to-use-google-maps-api-and-react-js-26c2)
              (https://stackoverflow.com/questions/68316426/placing-google-map-inside-a-col-div)
* [Compte à rebours](https://ichi.pro/fr/creer-un-compte-a-rebours-d-evenements-reutilisable-dans-react-6050538678834)
* [Storybook] (https://www.youtube.com/watch?v=FUKpWgRyPlU&ab_channel=WebDevSimplified)
* [CRUD] (https://www.youtube.com/watch?v=wgGkF4k9c7A)


## Auteurs

Arnaud Meilhoc - arnaud.meilhoc@edu.ece.fr

Corentin Rozenblum - corentin.rozenblum@edu.ece.fr

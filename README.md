# ERP Station Service

Ce projet est un ERP (Enterprise Resource Planning) conçu dans le cadre d'un projet universitaire, où nous avons adopté des méthodes agiles pour sa réalisation. Nous avons suivi un processus complet, de l'analyse des besoins à la conception, en passant par la planification des sprints et des tâches.

## Contexte

Nous avons commencé par analyser les besoins pour produire des user stories, puis nous avons organisé ces stories en sprints et product backlogs. Les rôles de Scrum Master, Product Owner, etc., ont été attribués pour assurer une gestion efficace du projet.

## Fonctionnalités

Cet ERP permet différentes fonctionnalités, notamment :

- Mettre en marche/arrêt les pompes
- Demander des réapprovisionnements (essence et produit)
- Délivrer des cartes fidélités et de crédit
- Gestion des achats, encaissements
- Consulter et mettre à jour les stocks de produits
- Être alerté en cas d'incidents
- Recevoir les directives de la direction régionale
- Organiser des services entre particulier

## Interfaces

Nous avons conçu deux types de dashboards : un pour l'employé et un pour le gérant, avec des informations spécifiques pour ce dernier. Voici quelques captures d'écran :

### Interface de Connexion
![Interface de Connexion](https://github.com/RayanOUTILI/ERP_station_service/assets/59539437/c71c2b40-f98f-4ba4-9899-3cc77cf41c56)

### Dashboard
![Dashboard](https://github.com/RayanOUTILI/ERP_station_service/assets/59539437/9548af2c-4020-4f54-9897-0732619f2627)

### Composant - État des Cuves
![État des Cuves](https://github.com/RayanOUTILI/ERP_station_service/assets/59539437/afa5f17f-61ea-44a9-9b18-4756859b78d9)

## Contraintes de Conception

Une contrainte de conception majeure était de maintenir la caisse constamment à gauche de l'écran et d'afficher les autres composants sur la partie droite de l'interface. Chaque composant a été conçu pour être extensible, permettant ainsi de remplir toute la partie droite de l'écran au besoin. Cette approche garantit l'accès rapide (en un click) aux fonctionnalités spécifiques de chaque composant tout en conservant la dualité entre la caisse et les autres fonctionnalités de l'ERP.

## Technologies Utilisées

- **Front-end** : ReactJS / CSS
- **Back-end** : NodeJS avec le Framework Express
- **Base de données** : PostgreSQL
- **Hébergement** : Heroku

---
## Auteurs 
[Tom Da Costa](https://github.com/Tom-DaCosta)
[Sabra Essalah](https://github.com/sabraess)
[Matthieu Griffonnet](https://github.com/Matt-Griff)
[Rayan Outili](https://github.com/RayanOUTILI)
[Thomas Portelette](https://github.com/ThomasPorteletteGit)
[Clara Torri](https://github.com/clarator)
[Lucas Wallner]()


# Comic Characters API

## Description

Cette API REST, construite avec NestJS, permet de créer et de gérer des personnages de comics. Elle offre également une fonctionnalité unique permettant de simuler des combats entre personnages, en se basant sur leurs attributs tels que la force et l'expérience.

## Installation

Pour installer les dépendances, exécutez la commande suivante dans le répertoire de votre projet :

```bash
npm install
```

## Démarage de l'application

```bash
npm run start:dev
```

L'application sera disponible sur http://localhost:3000.

## Utilisation

### Créer un personnage

- URL : /characters
- Méthode : POST
- Corps de la requête (JSON) :

```bash
{
  "name": "Nom du personnage",
  "power": "Pouvoir principal",
  "force": 85,
  "experience": 100
}
```

### Récupérer tous les personnages

- URL : /characters
- Méthode : GET

### Simuler un combat entre deux personnages

- URL : /interactions/fight?char1=[ID_DU_PREMIER_PERSONNAGE]&char2=[ID_DU_DEUXIEME_PERSONNAGE]
- Méthode : GET

Remplacez [ID_DU_PREMIER_PERSONNAGE] et [ID_DU_DEUXIEME_PERSONNAGE] par les ID réels des personnages

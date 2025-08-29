

Pour générer la github page
 - 1 fichier yml dans un dossier .github/workflows
 - 2 étapes
    - build: npm install et npm run build (cela doit générer un répertoire dist)
    - deploy: voir package pour déployer des artifacts (répertoire dist zippé) sur une github page (https://github.com/actions/deploy-pages)
- Une url publique générée qui permet d'accéder au site

Custom Select
 - https://codepen.io/alexdevero/pen/rNKzoN
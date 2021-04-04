# PhotoSharing

![Pipeline status](https://git.vuillermet.bzh/imta-formation/fip3a/cybpix/badges/master/pipeline.svg)

Démo https://cybpix.elektron.ink

Dépôt k8s https://github.com/Nemavio/CybPix :-)

## Environnement
PhotoSharing est déployé sur une stack microK8s d'un cluster d'une VM de 6Go de RAM et de 8vCPU hosté sur un magnifique R640 hosté chez milkywan.fr ! :)

![Un super Dell R640 chez Milky](https://pbs.twimg.com/media/EuR4uhkXEAA2jEb?format=jpg&name=large)

## Aspect sécurité

Un des points importants de ce projet réside dans la sécurité de l'application développée.

Ainsi, nous avons mis en place ces points de sécurité :

:bomb: Injection SQL (injection développée volontairement, car le fonctionnement de pg sous node empêche toute injection de base)

:bar_chart: Déploiement k8s avec BackEnd et FrontEnd en HA dans plusieurs pods pour tenir la charge

:cop: Déploiement d'un certificat SSL pour la présence d'une couche HTTP TLS

:traffic_light: Mise en place de IPFW, dans le but de bloquer tout accès extérieur à la base de donnée


## Compétences acquises

Grâce à cet UE F, Cyber des applis web et BDD, nous avons acquis de nombreuses compétences.
Nous avons pu mettre en oeuvre les compétences suivantes dans ce projet :

:heavy_check_mark: Développement BackEnd API NodeJS

:heavy_check_mark: Développement FrontEnd NodeJS React

:heavy_check_mark: Travail collaboratif & Versioning git

:heavy_check_mark: CI/CD Gitlab

:heavy_check_mark: Déploiement k8s

:heavy_check_mark: Sécurisation VPS

## Auteurs

@15dev : Développement FrontEnd React + BackEnd NodeJS + Schéma de BDD Postgresql

@Nemavio : DevOps µK8s






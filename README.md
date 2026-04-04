# Buurtcampuskrant - Challenge: data ophalen & design artikel
Tijdens deze sprint werd de focus gelegd op het ophalen van data uit onze database en dit te laten renderen op de browser. Daarnaast werd de focus ook gelegd op het maken van een goed en mooi design van voornamelijk de nieuwsartikelen.

**Wat is de Buurtcampuskrant?**

De buurtcampuskrant is een krant bedoeld voor de districten; Nieuw-West, Oost & Zuidoost in Amsterdam. Met drie Buurtcampussen in verschillende stadsdelen richten zij op actuele uitdagingen in de wijken van Amsterdam.

De Buurtcampus heeft vestigingen in OBA Geuzenveld (Nieuw-West), OBA Linnaeus (Oost) en OBA Ganzenhoef (Zuidoost). Dit zijn toegankelijke plekken waar studenten projecten ontwikkelen en uitvoeren, waar activiteiten plaatsvinden voor de buurtbewoners en waar onderzoekers aansluiting vinden bij hun wijkgerichte vragen. Het is een laagdrempelige plek waar de HvA en de wijk elkaar ontmoeten en waar opgedane kennis wordt teruggekoppeld aan de buurt.

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- In de Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->
Tijdens deze sprint is de focus gelegd op het ophalen van data uit de database en deze te laten renderen op de browser. Ik heb in deze sprint data opgehaald van de nieuwsartikelen (in de database heten dit stories), zoekfunctie gemaakt om artikelen sneller te kunnen vinden en tot slot een sorteer functie gemaakt zodat gebruikers de nieuwsartikelen op datum kunnen sorteren. Ik heb gewerkt volgens het _**Mobile First**_ & _**Content First**_ principe.

- Live URL website: https://server-side-rendering-server-side-website-v04g.onrender.com/

<img width="366" height="604" alt="image" src="https://github.com/user-attachments/assets/e6c228d4-bb5c-4fe2-9b0f-875683e904c4" />
<img width="367" height="501" alt="image" src="https://github.com/user-attachments/assets/09236f04-3e01-44dc-bfb3-d247600cd8f1" />

## Gebruik
<!--Bij Gebruik staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
Het is de bedoeling dat je op de Homepage alle artikelen/stories die het district `algemeen` hebben gekregen, te zien krijgt. De Homepage blijft dus neutraal als het ware. Een nieuwsartikel bestaat uit een `cover` voor visuele aantrekking, een `title` voor belangrijke keywords over het artikel, een `intro` om iets meer te weten over het artikel, en tot slot `date` om te kunnen zien wanneer een artikel is geplaatst en ook zodat gebruikers hierop kunnen sorteren.

Daarnaast heb ik samen met de hulp van mijn docenten ervoor gekozen om het archief in de footer te zetten, zodat de geïnteresseerden de edities uit voorgaande jaren kunnen bekijken. Echter werkt dit nog niet, mijn plan is om het in een van de komende sprints te gaan toe te passen. Wij hebben als inspiratie voor het archief de website van CSS Day genomen, waarin zij ook edities uit voorgaande jaren in de footer hebben gezet.

**CSS Day:**

<img width="364" height="463" alt="image" src="https://github.com/user-attachments/assets/7ccaafce-650d-4ed6-b2d4-09650b3ad377" />

**Mijn archief:**

<img width="363" height="114" alt="image" src="https://github.com/user-attachments/assets/ddf89a60-ce86-4893-94ff-56db43d29685" />

Ik heb ook een hamburger menu gemaakt met HTML, CSS & JavaScript. Deze kun je openen door op het hamburger-icoon te klikken rechtsbovenin de navigatiebar. En sluiten door in het geopende menu op het kruisje te klikken. Vanuit het hamburger menu kun je navigeren naar verschillende pagina's. Deze sprint heb ik naast de Homepage ook de Nieuw-West pagina gemaakt om bekender te worden met het filter parameter.

<img width="380" height="604" alt="image" src="https://github.com/user-attachments/assets/58e01271-a4be-4ea1-a6ae-4df2f2932f18" />

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->

## Installatie
<!-- Bij Instalatie staat hoe een andere developer aan jouw repo kan werken -->
Volg deze stappen om de development omgeving in te richten om aan deze repository te kunnen werken:

Stap 1) Installeer de [NodeJS ontwikkelomgeving](https://nodejs.org/en/download). Kies voor NodeJS 24.13.0 (LTS, long-term support), download het installatiebestand en doorloop het installatieproces.

Stap 2) Fork deze repository, clone deze op jouw computer en open het in VSCodium/ een code editor.

Stap 3) Open de Terminal in VSCodium, Voer in de terminal het commando npm install uit door het in te typen en op enter te drukken.

Stap 4 ) Na de installatie is de map node_modules aangemaakt, en gevuld met allerlei packages. Start de website door in de terminal het comando npm start uit te voeren. Als het goed is, komt hier een melding te staan over het opstarten van de server: Application started on http://localhost:8000 — Open deze URL in je browser.

## Bronnen
- [Liquid - if/else](https://shopify.dev/docs/api/liquid/tags/conditional-else)
- [JavaScript - 3 stappenplan](https://css-tricks.com/videos/150-hey-designers-know-one-thing-javascript-recommend/)
- [De Volkskrant - inspiratie](https://www.volkskrant.nl/)
- [NodeJS download](https://nodejs.org/en/download)

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).

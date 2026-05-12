# Afroshop – Online-Shop für asiatische & afrikanische Produkte

Ein vollständiges E-Commerce-Frontend, entwickelt im Rahmen des Moduls **Softwareentwicklung 2** an der Hochschule Bremerhaven (Team 17, 2024).

## Live-Demo

🌐 [Zur Webanwendung](https://emeric99.github.io/Afroshop/)

---

## Funktionen

- **Produktkatalog** – 9 Produkte mit Bild, Name und Preis
- **Warenkorb** – Artikel hinzufügen, Menge anpassen, Gesamtpreis berechnen
- **Bestellübersicht** – Liste abgeschlossener Bestellungen
- **Registrierung & Login** – Formularvalidierung mit Anbindung an CGI-Backend (Bash)
- **Standortkarte** – interaktive Karte via Leaflet.js
- **Über uns** – Teamvorstellung

---

## Tech-Stack

| Bereich | Technologie |
|--------|-------------|
| Frontend | HTML5, CSS3, JavaScript (Vanilla) |
| Karte | Leaflet.js |
| Backend | Bash CGI-Skripte |
| Datenspeicherung | CSV-Dateien |
| Deployment | Docker (Hochschule Bremerhaven) |

---

## Projektstruktur

```
SWE2_Projekt/
├── index1.html         # Startseite
├── produkte.html       # Produktkatalog mit Warenkorb
├── bestellungen.html   # Bestellübersicht
├── position.html       # Standortkarte (Leaflet.js)
├── register.html       # Registrierungsformular
├── ueber.html          # Über uns / Team
├── main.css            # Zentrales Stylesheet
├── script.js           # Warenkorb-Logik
├── log_reg.js          # Login & Registrierung (Fetch API)
├── position.js         # Karteninitialisierung
├── marker.js           # Kartenmarkierungen
└── script/
    ├── register.sh     # CGI: Benutzer registrieren
    ├── login.sh        # CGI: Benutzer einloggen
    ├── kundendata.csv  # Kundendaten
    └── kontakt.csv     # Kontaktdaten
```

---

## Lokale Ausführung

```bash
# Repository klonen
git clone https://github.com/Emeric99/Projekte.git
cd Projekte/SWE2_Projekt

# index1.html direkt im Browser öffnen
# (Hinweis: Login/Registrierung benötigt das laufende Backend)
open index1.html
```

---

## Was ich dabei gelernt habe

- Teamarbeit mit Git (Branches, Merge-Konflikte lösen)
- Aufbau einer mehrseitigen Webanwendung ohne Framework
- Anbindung von Frontend an ein Bash-CGI-Backend via Fetch API
- Deployment in einer Dockerisierten Hochschulumgebung
- Responsive Design mit CSS Grid und Flexbox

---

## Team

Entwickelt von 4 Studierenden im Rahmen von SWE2 · Hochschule Bremerhaven · 2024

---

*Modul: Softwareentwicklung 2 · Team 17 · Wintersemester 2024*

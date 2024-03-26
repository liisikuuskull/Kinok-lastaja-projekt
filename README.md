#Kinokülastaja projekt

See projekt on loodud kinokülastajate haldamiseks, sealhulgas nende registreerimiseks, sisselogimiseks ja filmide hinnangute jälgimiseks.

#Kasutatud tehnoloogiad

Back-end: PHP
Andmebaas: MySQL
Testimine: Cypress
Dokumentatsioon: TestRail
Käivitamine

Kloneerige projekt enda arvutisse:
bash
Copy code
git clone https://github.com/liisikuuskull/Kino.git
Laadige alla vajalikud sõltuvused:
Copy code
composer install
Seadistage andmebaasikonfiguratsioon vastavalt enda keskkonnale, muutes faili config.php.
Käivitage PHP sisseehitatud server:
Copy code
php -S localhost:8000
Avage veebibrauser ja minge aadressile http://localhost:8000.
Testimine

Projekti testimiseks kasutatakse Cypressi. Testide käivitamiseks:

arduino
Copy code
npm install
npm run cypress:open
Dokumentatsioon

Projekti dokumentatsioon on koostatud TestRailis. Kõik testjuhud ja tulemused on seal jälgitavad.

Tööaja arvestus

Tööks kulunud aeg: [sisestage siia aeg]

Raskused ja lahendused

Back-endi valik: Algul prooviti kasutada Spring Booti, kuid see ei õnnestunud. Seetõttu valiti lõpuks PHP.
Andmebaasiga ühenduse seadistamine: Esialgu oli keeruline seadistada andmebaasiga ühendust, kuid see lahendati, muutes andmebaasi konfiguratsioonifaili.
Autentimise ja autoriseerimise rakendamine: PHP-s autentimise ja autoriseerimise rakendamine oli keerukam kui oodatud, kuid see lahendati, uurides dokumentatsiooni ja näiteprojekte.
Järeldus

Kokkuvõttes oli projekt väljakutseid pakkuv, kuid õpetlik kogemus. Õnnestusid põhilised funktsionaalsused, kuid oleks võimalik veel täiendusi teha ja koodi refaktoreerida.

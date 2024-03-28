**#Kinokülastaja projekt**

See projekt on veebirakendus kinokülastajatele, mis aitab kasutajatel filtreerida filme, osta pileteid seanssidele, valida istekohti jne.


## Kasutatud tehnoloogiad

* Back-end: PHP, Java
* Andmebaas: MySQL
* Front-end: HTML, CSS, JavaScript
* Testimine: Cypress
* Manuaalne testimine: TestRail


## Käivitamine
Kasutajad saavad kloonida minu GitHubi projekti enda arvutisse kasutades järgmist käsku terminalis:
git clone https://github.com/liisikuuskull/Kinokylastaja_projekt.git

Lehe vaated:
1.Esileht:http://127.0.0.1:5500/kino/src/main/resources/static/frontpage.html
<img width="1432" alt="Screenshot 2024-03-26 at 16 11 05" src="https://github.com/liisikuuskull/Kinokylastaja_projekt/assets/91655576/ca74ccac-153d-4a88-a59d-9b804e1fa950">
<img width="1406" alt="Screenshot 2024-03-26 at 16 11 31" src="https://github.com/liisikuuskull/Kinokylastaja_projekt/assets/91655576/ef445136-8a31-438a-9bce-d3c647e65644">
<img width="1425" alt="Screenshot 2024-03-26 at 16 11 50" src="https://github.com/liisikuuskull/Kinokylastaja_projekt/assets/91655576/adf53319-5f9d-4790-8e75-2dc7a3fec2ea">

2. Films http://127.0.0.1:5500/kino/src/main/resources/static/films.html
<img width="1436" alt="Screenshot 2024-03-26 at 16 15 49" src="https://github.com/liisikuuskull/Kinokylastaja_projekt/assets/91655576/5b92d0e2-1bbf-4a53-92d8-14edac6e4b95">

3. Show Times http://127.0.0.1:5500/kino/src/main/resources/static/showtimes.html
<img width="1432" alt="Screenshot 2024-03-26 at 17 56 16" src="https://github.com/liisikuuskull/Kinokylastaja_projekt/assets/91655576/20347e32-9e4e-4a1e-884b-6e910268b473">

4.Login http://127.0.0.1:5500/kino/src/main/resources/static/login.html
<img width="1052" alt="Screenshot 2024-03-26 at 17 57 38" src="https://github.com/liisikuuskull/Kinokylastaja_projekt/assets/91655576/b5452d27-c761-4090-99a9-20d3c5320eee">

5. Register http://127.0.0.1:5500/kino/src/main/resources/static/register.html
<img width="897" alt="Screenshot 2024-03-26 at 17 59 47" src="https://github.com/liisikuuskull/Kinokylastaja_projekt/assets/91655576/f2c600f6-a1e3-4ac4-bad9-ca8046f92a0d">
<img width="732" alt="Screenshot 2024-03-26 at 17 59 58" src="https://github.com/liisikuuskull/Kinokylastaja_projekt/assets/91655576/5c81e064-55fa-4bfc-b705-18ff7ec28755">

6. Hall1 Plan http://127.0.0.1:5500/kino/src/main/resources/static/hall1plan.html

<img width="1334" alt="Screenshot 2024-03-26 at 18 01 27" src="https://github.com/liisikuuskull/Kinokylastaja_projekt/assets/91655576/9cea9d32-2b60-47f2-a828-a3b60753b381">

##Testimine

Tegin mõned automaattestid Cypressiga:
  
<img width="1434" alt="Screenshot 2024-03-26 at 14 24 55" src="https://github.com/liisikuuskull/Kinokylastaja_projekt/assets/91655576/025ecc91-173c-4d5a-8009-fa782a510771">

<img width="1433" alt="Screenshot 2024-03-26 at 14 28 27" src="https://github.com/liisikuuskull/Kinokylastaja_projekt/assets/91655576/f247421d-2d2a-47da-9147-d383a4899e0b">

<img width="1430" alt="Screenshot 2024-03-26 at 14 28 47" src="https://github.com/liisikuuskull/Kinokylastaja_projekt/assets/91655576/761b92b8-4ade-4e73-a1a0-43b307e438a7">

<img width="1433" alt="Screenshot 2024-03-26 at 14 27 32" src="https://github.com/liisikuuskull/Kinokylastaja_projekt/assets/91655576/04045686-6c64-41fb-b656-39ae07d9b5bc">


<img width="1434" alt="Screenshot 2024-03-26 at 14 27 56" src="https://github.com/liisikuuskull/Kinokylastaja_projekt/assets/91655576/a9e87881-25db-4ef8-b591-cb46b1615f22">



Testide käivitamine Cypressiga:
npm install (paigaldab projekti sõltuvused)
npx cypress open (see avab Cypressi kasutajaliidese)
npx cypress run (käivitab Cypress testimisskriptid otse terminalis)

Manuaalne testimine TestRaili-ga:

<img width="1428" alt="Screenshot 2024-03-26 at 15 26 54" src="https://github.com/liisikuuskull/Kinokylastaja_projekt/assets/91655576/3551068a-b930-45a1-b091-b98cb4d468e1">
<img width="1167" alt="Screenshot 2024-03-26 at 15 27 16" src="https://github.com/liisikuuskull/Kinokylastaja_projekt/assets/91655576/2e672e53-45da-4a78-a5a3-a5544f9086e6">
<img width="1165" alt="Screenshot 2024-03-26 at 15 27 36" src="https://github.com/liisikuuskull/Kinokylastaja_projekt/assets/91655576/6a7104e1-167a-4241-8066-a6f9d255eb6c">




## Mysql
Tegin andmebaasi nimega cinema. 
Seal sees on kaks tabelit filmide list ja paar testkasutajat. 

<img width="1434" alt="Screenshot 2024-03-26 at 15 35 17" src="https://github.com/liisikuuskull/Kinokylastaja_projekt/assets/91655576/f95dcc1a-4747-4ada-8c37-7b1da5b112b0">


## Filmide raiting
Filmide raitingu kuvamiseks lehel kasutasin sellist lehte nagu https://www.themoviedb.org/, seal ma tegin ennast kasutajaks ja võtsin API võtme.

Tegin seda youtube-i video järgi, mille link on siin https://www.youtube.com/watch?v=9Bvt6BFf6_U

<img width="1433" alt="Screenshot 2024-03-28 at 13 23 39" src="https://github.com/liisikuuskull/Kinokylastaja_projekt/assets/91655576/1f47e34c-1b5d-45b8-859d-c453221c82ff">



## Tööks kulunud aeg

Tegelesin selle projektiga peaaegu igapäev, nädalavahetustel mitte nii väga. Üritasin maksimaalselt seda aega ära kasutada, mis projekti tegemiseks anti. 



## Raskused ja lahendused

Alguses tundus kõik raske, aga siis hakkasin lihtsalt midagi tegema ja tekkisid ideed kuidas üks või teine asi võiks olla. Vaatasin internetist, kuidas taolised lehed on tehtud. Sügisel tegin endale Portfoliot ja mõtlesin, et võiks seda koodi muuta ja hakata sinna peale seda lehte ülesse ehitama.
Tahtsin kasutada Spring Booti, kuid see ei õnnestunud, sest Maveniga oli mingi jama. Siis ma üritasin back-endi poolt teha PHP-ga.

## Järeldus

Kokkuvõttes oli projekt väljakutseid pakkuv, kuid õpetlik kogemus. Aega oleks võinud olla rohkem, sest back-endi pool oli raske. Spring Bootiga ma ei ole varem kokku puutunud ja otsisin netist selle kohta infot. Leidsin Spring Boot-i koolituse https://www.udemy.com/course/spring-hibernate-tutorial/?couponCode=GENAISALE24 , aga kahjuks see oli täishinnaga. Paar päeva enne tähtaja lõppu avastasin, et koolitus on soodustusega ja ostsin selle. Kahjuks ma ei jõudnud sellega väga kaugele.
Seda projekti saab edasi arendada ja keerukamaks muuta. Ebavajalikud koodijupid saab ära kustutada (hetkel ma jätsin need veel alles). Koodi saab puhtamaks muuta.

# Exuplan — uusi etusivu (malli)

Malli uudesta etusivusta mustalla teemalla. Toteutettu Vite + React
-projektina, eli samalla tekniikalla kuin Full Stack Open -kurssin osat 1–5.
Vanha sivusto on koskematta kansiossa `exuplan_website/`.

Tämä on **vain etusivu**. Alasivut (konenäkö, mittaus, ohjelmistot…) ovat
edelleen vanhassa toteutuksessa.

## Kehitys

```bash
npm install
npm run dev
```

Avaa `http://localhost:5173`.

## Rakenne

```
src/
├── App.jsx                 kokoaa sivun osioista
├── main.jsx                sovelluksen juuri
├── index.css               teeman värit ja yhteiset tyylit
├── components/
│   ├── Logo.jsx            tekstilogo (ks. huomio logosta alla)
│   ├── Header.jsx          kiinteä yläpalkki + mobiilivalikko
│   ├── Hero.jsx            pääotsikko ja nostot
│   ├── Services.jsx        palvelukortit
│   ├── Expertise.jsx       logiikkaohjaukset + työn vaiheet
│   ├── Contact.jsx         yhteystiedot ja tarjouspyyntölomake
│   └── Footer.jsx          alatunniste ja laskutustiedot
├── data/content.js         kaikki tekstit ja yhteystiedot
└── hooks/useField.js       lomakekentän custom hook (osa 7)
```

Tekstit, palvelut ja yhteystiedot muokataan tiedostosta
`src/data/content.js` — komponentteihin ei tarvitse koskea.

## Teeman värit

Värit ovat CSS-muuttujina tiedoston `src/index.css` alussa. Koko sivun sävyn
vaihtaa muuttamalla näitä:

```css
--bg: #0a0a0b;        /* sivun tausta */
--surface: #17171c;   /* korttien tausta */
--text: #f5f5f6;      /* leipäteksti */
--accent: #e4121f;    /* korostusväri, logon punainen */
```

## Julkaisu Domainkeskukseen

```bash
npm run build
```

Komento tekee `dist/`-kansion, jonka **sisällön** (ei kansiota itseään)
kopioit FTP:llä webhotellin julkiseen kansioon, esimerkiksi `public_html/`
tai `www/`. Sivu on tavallinen staattinen sivusto — palvelimelta ei tarvita
Nodea eikä muuta erikoista.

`vite.config.js`:ssä on `base: './'`, joten sivu toimii myös alikansiossa
(esim. `exuplan.fi/uusi/`) ilman muutoksia.

## Vielä tehtävää ennen julkaisua

1. **Logo.** Nykyinen PNG-logo on mustalla tekstillä eikä erotu tummalta
   taustalta, joten tunnus on ladottu tekstinä (`Logo.jsx`). Kun logosta
   saadaan valkoinen versio, sen voi vaihtaa tilalle `<img>`-elementtinä.
2. **Lomake.** Staattisella webhotellilla ei ole palvelinta, joten lomake
   avaa viestin sähköpostiohjelmaan. Jos halutaan oikea lähetys, tarvitaan
   PHP-skripti tai lomakepalvelu.
3. **Sisältö.** Tekstit ja luvut (esim. "30+ vuotta") ovat luonnoksia —
   tarkista ne Esan kanssa.
4. **Mobiilinäkymä** kannattaa katsoa vielä selaimen laitetilassa
   (F12 → device toolbar).

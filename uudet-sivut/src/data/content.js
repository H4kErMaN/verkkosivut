// Sivun sisältö yhdessä paikassa, jotta tekstien muokkaus ei vaadi
// komponenttien koskemista. Komponentit saavat nämä propseina.

export const services = [
  {
    id: 'konenako',
    title: 'Konenäkö',
    description:
      'Kameroihin ja kuva-analyysiin perustuvat tarkastus- ja mittausjärjestelmät tuotantolinjoille.',
    points: ['Laaduntarkastus', 'Kappaleen tunnistus', 'Mittaava konenäkö'],
    href: 'konenako.html',
  },
  {
    id: 'mittaus',
    title: 'Mittaussovellukset',
    description:
      'Teollisuuden mittausratkaisut anturivalinnasta valmiiseen, kalibroituun järjestelmään.',
    points: ['Anturointi', 'Mittausdatan keruu', 'Kalibrointi'],
    href: 'mittarit.html',
  },
  {
    id: 'ohjelmistot',
    title: 'Ohjelmistot',
    description:
      'Räätälöidyt ohjelmistot mittaukseen, raportointiin ja tuotannon seurantaan.',
    points: ['Mittausohjelmistot', 'Raportointi', 'Integraatiot'],
    href: 'ohjelmistot.html',
  },
  {
    id: 'logiikka',
    title: 'Logiikkaohjaukset',
    description:
      'Koneiden ja kiinteistöjen ohjaukset nykyaikaisella logiikka- ja anturiteknologialla.',
    points: ['Koneohjaukset', 'Kiinteistöautomaatio', 'Käyttöönotto'],
  },
  {
    id: 'konsultointi',
    title: 'Konsultointi',
    description:
      'Asiantuntija-apu ja projektinhallinta hankkeen määrittelystä käyttöönottoon.',
    points: ['Esiselvitykset', 'Projektinhallinta', 'Tekninen tuki'],
  },
  {
    id: 'vaatimustenhallinta',
    title: 'Vaatimustenhallinta',
    description:
      'Vaatimusten kerääminen, dokumentointi ja jäljitettävyys vaativissa projekteissa.',
    points: ['Määrittely', 'Dokumentointi', 'Jäljitettävyys'],
  },
]

export const stats = [
  { id: 'kokemus', value: '30+', label: 'vuotta kokemusta alalta' },
  { id: 'toimialat', value: '6', label: 'palvelualuetta' },
  { id: 'sijainti', value: 'Mikkeli', label: 'toimipaikka, koko Suomi' },
]

export const company = {
  name: 'Exuplan',
  tagline: 'Measuring Automation',
  street: 'Salapirkontie 5',
  postal: '50800 Mikkeli',
  businessId: '2761330-9',
  vat: 'FI27613309',
  domicile: 'Mikkeli',
  evoucher: '003727613309',
  broker: 'OKOYFIHH',
  bank: 'OP Lappeenranta',
  iban: 'FI96 5620 0920 5805 69',
  contactPerson: 'Esa Kuvaja',
  email: 'esa.kuvaja@exuplan.fi',
  phone: '+358 40 822 7743',
  phoneHref: '+358408227743',
}

// ---------- Ohjelmistot-alasivu ----------

export const softwareIntro =
  'Exuplan tekee eri tekniikan alueilla tarvittavia mittaus- ja ' +
  'automaatio-ohjelmistoja. Toteutus valitaan aina kohteen mukaan: ' +
  'työasemasovellus, mittausjärjestelmän ohjelmisto tai koneen ' +
  'logiikkaohjelma — tarvittaessa kaikki samaan kokonaisuuteen.'

export const softwareTools = [
  {
    id: 'qt-creator',
    name: 'Qt Creator',
    tag: 'Sovelluskehitys',
    description:
      'Käyttöliittymien ja mittausjärjestelmien C++-kehitystyökalu.',
  },
  {
    id: 'visual-studio',
    name: 'Visual Studio',
    tag: 'Sovelluskehitys',
    description: 'Vastaava Microsoftin työkalu.',
  },
  {
    id: 'beckhoff',
    name: 'Beckhoff',
    tag: 'Logiikat',
    description: 'Logiikkaohjelmistot.',
  },
  {
    id: 'siemens',
    name: 'Siemens',
    tag: 'Logiikat',
    description: 'Logiikkaohjelmistot.',
  },
  {
    id: 'beremiz',
    name: 'Beremiz',
    tag: 'Avoin lähdekoodi',
    description: 'softPLC, avoimen koodin ohjelmisto.',
  },
]

export const softwareScope = [
  {
    id: 'mittausohjelmistot',
    title: 'Mittausohjelmistot',
    text: 'Mittausdatan keruu, käsittely ja esitys käyttäjälle selkeässä muodossa.',
  },
  {
    id: 'raportointi',
    title: 'Raportointi',
    text: 'Tuotannon ja laadun raportit siinä muodossa, jossa niitä oikeasti käytetään.',
  },
  {
    id: 'integraatiot',
    title: 'Integraatiot',
    text: 'Tiedonsiirto olemassa oleviin järjestelmiin ja tietokantoihin.',
  },
  {
    id: 'logiikkaohjelmat',
    title: 'Logiikkaohjelmat',
    text: 'Koneiden ja laitteiden ohjaukset sekä käyttöönotto tuotantoympäristössä.',
  },
]

// ---------- Konenäkö-alasivu ----------

export const visionIntro =
  'Konenäköä tarvitaan teollisuudessa yhä enemmän, ja Exuplan on valmis ' +
  'vastaamaan konenäköön liittyviin haasteisiin. Kamerat, tietokonelaitteet ' +
  'ja sovellukset valitaan asiakkaan tarpeiden mukaan nykyaikaisista ' +
  'vaihtoehdoista.'

export const visionCases = [
  {
    id: 'laaduntarkastus',
    name: 'Laaduntarkastus',
    tag: 'Laatu',
    description:
      'Automaattinen laadutus on mahdollista toteuttaa joustavasti nykyaikaisen konenäköteknologian avulla.',
  },
  {
    id: 'tunnistus',
    name: 'Kappaleen tunnistus',
    tag: 'Tuotanto',
    description:
      'Kappaleiden tunnistus ja lajittelu tuotantolinjalla kuva-analyysin perusteella.',
  },
  {
    id: 'mittaava',
    name: 'Mittaava konenäkö',
    tag: 'Mittaus',
    description:
      'Mitat ja muodot kuvasta silloin, kun koskettava mittaus ei ole mahdollista.',
  },
  {
    id: 'seuranta',
    name: 'Tuotannon seuranta',
    tag: 'Seuranta',
    description:
      'Kuvadata talteen ja raportoitavaksi yhdessä muun mittaustiedon kanssa.',
  },
]

export const visionScope = [
  {
    id: 'kartoitus',
    title: 'Kartoitus',
    text: 'Käydään läpi mitä tarkastetaan tai mitataan ja millä tarkkuudella.',
  },
  {
    id: 'laitevalinnat',
    title: 'Kamerat ja valaistus',
    text: 'Kamerat ja tietokonelaitteet valitaan kohteen mukaan nykyaikaisista vaihtoehdoista.',
  },
  {
    id: 'sovellus',
    title: 'Sovellus',
    text: 'Kuva-analyysi ja käyttöliittymä toteutetaan kohteen vaatimusten mukaan.',
  },
  {
    id: 'integrointi',
    title: 'Integrointi',
    text: 'Järjestelmä liitetään tuotantolinjaan ja otetaan käyttöön tuotannossa.',
  },
]

// Alasivut valikkoa varten. Uusi alasivu lisätään tähän ja
// vite.config.js:n input-listaan.
export const subpages = [
  { id: 'konenako', label: 'Konenäkö', href: 'konenako.html' },
  { id: 'mittarit', label: 'Mittarit', href: 'mittarit.html' },
  { id: 'ohjelmistot', label: 'Ohjelmistot', href: 'ohjelmistot.html' },
]

// ---------- Mittarit-alasivu ----------
// Tekstit ovat dokumentista Mittaureista.docx.

export const gaugesIntro =
  'Exuplan suunnittelee ja valmistaa mittalaitteita sahoille, ' +
  'dimensiolajittelulaitoksille ja kuivan sahatavaran käsittelyyn. ' +
  'Lisäksi toteutamme sahalinjojen suunnittelun, sähköistyksen ja ' +
  'automaation. Myös kaikenlaiset tuotannon optimoinnit kuuluvat ' +
  'toimituksiimme.'

export const logGauges = [
  {
    id: 'exuscan',
    name: 'ExuScan',
    tag: 'Oma tuote',
    description:
      'Oma, edullinen tukkimittarimme. Se perustuu GigE-kameroihin ja on tarkoitettu linjoille, joiden nopeus on alle 90 m/min.',
  },
  {
    id: 'joescan',
    name: 'JoeScan-3D',
    tag: 'Nopeat linjat',
    description:
      'Nopeammille linjoille toimitamme tukkimittarin JoeScan-3D-antureilla. Anturit käyttävät kahteen kameraan perustuvaa kuvaustekniikkaa tarkempaan pinnan muodon mittaukseen, enimmillään 500 profiilia sekunnissa.',
  },
]

export const logGaugesNote =
  'Kummastakin mittarista on saatavana myös pelkan ja parrun mittaukseen ' +
  'sopiva malli.'

export const lumberGauges = [
  {
    id: 'vahvuus',
    name: 'Vahvuus- ja leveysmittari',
    tag: 'Tarkkuus 0,1 mm',
    description: 'Dimensiolajittelulaitosten vahvuuden ja leveyden mittaus.',
  },
  {
    id: 'pituus',
    name: 'Pituusmittari',
    tag: 'Tarkkuus 1 mm',
    description: 'Sahatavaran pituuden mittaus lajittelun yhteydessä.',
  },
]

export const lumberGaugesNote =
  'Samoja mittareita voi käyttää myös kuivan sahatavaran laitoksilla ' +
  'laadun seurantaan.'

export const sawVisionApps = [
  'Kappaleen kääntö ennen höylää',
  'Sydämen paikan tunnistus tukin tai parrun päästä asetteen muodostusta varten',
  'Yksinkertaiset kuvankäsittelyyn perustuvat sahatavaran laadutusjärjestelmät',
]

export const sawlineSteps = [
  { id: 'layout', title: '3D-layoutsuunnittelu' },
  { id: 'suunnittelu', title: 'Sähkö- ja automaatiosuunnittelu' },
  { id: 'asennukset', title: 'Sähkö- ja automaatioasennukset' },
  { id: 'ohjelmointi', title: 'PLC- ja mittausjärjestelmien ohjelmoinnit' },
  { id: 'optimointi', title: 'Optimointi- ja raportointijärjestelmät' },
]

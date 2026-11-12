// Sivun sisältö yhdessä paikassa, jotta tekstien muokkaus ei vaadi
// komponenttien koskemista. Komponentit saavat nämä propseina.

export const services = [
  {
    id: 'konenako',
    title: 'Konenäkö',
    description:
      'Kameroihin ja kuva-analyysiin perustuvat tarkastus- ja mittausjärjestelmät tuotantolinjoille.',
    points: ['Laaduntarkastus', 'Kappaleen tunnistus', 'Mittaava konenäkö'],
  },
  {
    id: 'mittaus',
    title: 'Mittaussovellukset',
    description:
      'Teollisuuden mittausratkaisut anturivalinnasta valmiiseen, kalibroituun järjestelmään.',
    points: ['Anturointi', 'Mittausdatan keruu', 'Kalibrointi'],
  },
  {
    id: 'ohjelmistot',
    title: 'Ohjelmistot',
    description:
      'Räätälöidyt ohjelmistot mittaukseen, raportointiin ja tuotannon seurantaan.',
    points: ['Mittausohjelmistot', 'Raportointi', 'Integraatiot'],
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

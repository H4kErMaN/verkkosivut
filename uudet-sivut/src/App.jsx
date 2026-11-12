import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Expertise from './components/Expertise'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { company, services, stats } from './data/content'

const App = () => (
  <>
    <a className="skip-link" href="#sisalto">
      Siirry sisältöön
    </a>

    <Header company={company} />

    <main id="sisalto">
      <Hero stats={stats} />
      <Services services={services} />
      <Expertise />
      <Contact company={company} />
    </main>

    <Footer company={company} />
  </>
)

export default App

import * as React from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./sections/Hero.jsx";
import Page from "./sections/Page.jsx";

function App() {
    return (
        <React.Fragment>
            <Header />
            <main>
                <Hero />
                <Page />
            </main>
            <Footer />
        </React.Fragment>
    );
}

export default App;

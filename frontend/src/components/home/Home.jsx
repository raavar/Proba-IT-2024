import Hero from "./body/Hero.jsx"
import TopRated from "./body/TopRated.jsx"
import Contact from "./body/Contact.jsx"
import Footer from "../footer/Footer.jsx";
import Header from "../header/Header.jsx";

function Homepage(){

    return(
        <body>
            <Header />
            <Hero />
            <TopRated />
            <Contact />
            <Footer />
        </body>
    );
}

export default Homepage
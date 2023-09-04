import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
// import Qualification from "./components/qualifications/Qualification";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";

const App = () => {
    return (
        <>
            <Header />
            <main className="main">
                <Home />
                <About />
                <Services />
                {/* <Qualification /> */}
                <Work />
                <Skills />
                <Contact />
                <Testimonials />
            </main >
            <Footer />
            <ScrollUp />
        </>
    );
};

export default App;

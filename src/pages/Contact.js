import React, { Component } from "react";
import Form from "../components/Contact/Form";
import Social from "../components/Home/Social";
import "../styles/Contact.scss";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <Nav />
                <main id="contact">
                    <h2>Contact</h2>
                    <div className="container">
                        <Form />
                        <div className="info">
                            <h3>
                                Marc Yannick COULIBALY
                                <br />
                                <span>
                                    Etudiant à l'Institut F2i à Vincennes
                                </span>
                            </h3>
                            <span>Asnières-sur-Seine, île-de-France</span>
                            <a
                                href="mailto:yannickcoulibaly220@gmail.com"
                                className="mouseover"
                            >
                                yannickcoulibaly220@gmail.com
                            </a>
                            <a
                                href="tel:+33 6 62 09 89 74"
                                className="mouseover"
                            >
                                +33 6 62 09 89 74
                            </a>
                            <Social />
                        </div>
                    </div>
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Contact;

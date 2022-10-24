import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../../styles/Form.scss"

function Form() {
    // EmailJs
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
                "service_92lvc9s",
                "template_4uhfy2d",
                form.current,
                "uOgNSBvHpFRM25xgu"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
            form.current.reset()
            
            alert('Votre Message a bien été envoyé, je vous répondrez le plus rapidement possible😊')
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="name" className="mouseover">Nom</label>
            <input name="name" id="name" type="text" className="shadow-sm mouseover"/>
            <label htmlFor="mail" className="mouseover">E-mail*</label>
            <input name="mail" id="mail" type="text" className="shadow-sm mouseover" required/>
            {/* <label htmlFor="address" className="mouseover">Adresse</label>
            <input name="address" id="address" type="text" className="shadow-sm mouseover" required/> */}
            <label htmlFor="subject" className="mouseover">Sujet</label>
            <input name="subject" id="subject" type="text" className="shadow-sm mouseover"/>
            <label htmlFor="message" className="mouseover">Message*</label>
            <textarea name="message" id="message" className="shadow-sm mouseover" required></textarea>
            <button type="submit" className="mouseover">Envoyer</button>
        </form>
    );
}

export default Form;

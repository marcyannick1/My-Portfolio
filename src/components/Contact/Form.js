import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from 'react-hot-toast';
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
                    form.current.reset()
                    toast.success('Votre message a bien été envoyé 😉')
                },
                (error) => {
                    toast.error('Votre message n\'a pas pu être envoyé')
                },
            )
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="name" className="mouseover">Nom</label>
            <input name="name" id="name" type="text" className="shadow-sm mouseover"/>
            <label htmlFor="mail" className="mouseover">E-mail*</label>
            <input name="mail" id="mail" type="text" className="shadow-sm mouseover" required/>
            <label htmlFor="subject" className="mouseover">Sujet</label>
            <input name="subject" id="subject" type="text" className="shadow-sm mouseover"/>
            <label htmlFor="message" className="mouseover">Message*</label>
            <textarea name="message" id="message" className="shadow-sm mouseover" required></textarea>
            <button type="submit" className="mouseover">Envoyer</button>
        </form>
    );
}

export default Form;

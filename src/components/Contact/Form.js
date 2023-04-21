import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import "../../styles/Form.scss";
import ContainerAnimate, {
    item,
} from "../../components/Portfolio/ContainerAnimate";
import { motion } from "framer-motion";

function Form() {
    // EmailJs
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_92lvc9s",
                "template_4uhfy2d",
                form.current,
                "uOgNSBvHpFRM25xgu"
            )
            .then(
                (result) => {
                    form.current.reset();
                    toast.success("Votre message a bien été envoyé 😉");
                },
                (error) => {
                    toast.error("Votre message n'a pas pu être envoyé");
                }
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <ContainerAnimate delayChildren={0.2} staggerChildren={0.1}>
                <motion.div variants={item}>
                    <label htmlFor="name" className="mouseover">
                        Nom
                    </label>
                    <input
                        name="name"
                        id="name"
                        type="text"
                        className="shadow-sm mouseover"
                    />
                </motion.div>
                <motion.div variants={item}>
                    <label htmlFor="mail" className="mouseover">
                        E-mail*
                    </label>
                    <input
                        name="mail"
                        id="mail"
                        type="text"
                        className="shadow-sm mouseover"
                        required
                    />
                </motion.div>
                <motion.div variants={item}>
                    <label htmlFor="subject" className="mouseover">
                        Sujet
                    </label>
                    <input
                        name="subject"
                        id="subject"
                        type="text"
                        className="shadow-sm mouseover"
                    />
                </motion.div>
                <motion.div variants={item}>
                    <label htmlFor="message" className="mouseover">
                        Message*
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        className="shadow-sm mouseover"
                        required
                    ></textarea>
                </motion.div>
                <motion.div variants={item}>
                    <button type="submit" className="mouseover">
                        Envoyer
                    </button>
                </motion.div>
            </ContainerAnimate>
        </form>
    );
}

export default Form;

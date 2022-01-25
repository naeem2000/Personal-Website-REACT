import "./contact.scss";
import { useForm } from '@formspree/react';

export default function Contact() {
    const [state, handleSubmit] = useForm("xdobagjw");
    if (state.succeeded) {
        alert("Thank you! I will get back to you ASAP :)");
        window.location.reload();
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.png" alt="" srcset="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
            <form name="contact" onSubmit={handleSubmit}>
                <input type="name" name="name" placeholder="Full Name" required/>
                <input type="email" name="email" placeholder="E-mail" required/>
                <textarea name="message" placeholder="Your message..." id="" cols="30" rows="10" required></textarea>
                <input type="submit" value="Submit" className="button"/>
            </form>
            </div>
        </div>
    )
}
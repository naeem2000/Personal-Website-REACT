import animationData from "../lotties/116204-flying-rocket-in-the-sky.json";
import { useForm } from "@formspree/react";
import Lottie from "react-lottie";
import "./contact.scss";

export default function Contact() {
  const [state, handleSubmit] = useForm("xdobagjw");
  if (state.succeeded) {
    alert("Thank you! I will get back to you ASAP :)");
    window.location.reload();
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
      </div>
      <div className="right">
        <form name="contact" onSubmit={handleSubmit}>
          <h2>Contact</h2>
          <input type="name" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="E-mail" required />
          <textarea
            name="message"
            placeholder="Your message..."
            id=""
            cols="30"
            rows="10"
            required
          ></textarea>
          <input type="submit" value="Submit" className="button" />
        </form>
      </div>
    </div>
  );
}

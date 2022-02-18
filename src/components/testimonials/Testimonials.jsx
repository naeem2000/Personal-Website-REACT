import "./testimonials.scss";
import { LinkedIn } from "@material-ui/icons";

export default function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        <div className="card">
          <div className="top">
            <div className="itemContainer">
              <img className="user" src="assets/rob.jpeg" alt="" srcset="" />
              <a
                target="_blank"
                rel="noreferrer"
                href="http://www.linkedin.com/in/robert-b-73463a1b1/"
              >
                <LinkedIn className="icon" />
              </a>
            </div>
          </div>
          <div className="center">
            Naeem is a young man who has worked hard at producing a good set of
            assessments on time. He is a pleasant and competent person who does
            his best to help others where he can. Technically his competence is
            good in Web Development. With self-gained knowledge in Computer
            systems.
          </div>
          <div className="bottom">
            <h3>Robert Brady</h3>
            <h4>Facilitator at CapaCiTi</h4>
          </div>
        </div>
        <div className="card">
          <div className="top">
            <div className="itemContainer">
              <img
                className="user"
                src="assets/marilize.jpg"
                alt=""
                srcset=""
              />
              <a
                target="_blank"
                rel="noreferrer"
                href="http://www.linkedin.com/in/marilize-koen-65433b29/"
              >
                <LinkedIn className="icon" />
              </a>
            </div>
          </div>
          <div className="center">
            Naeem has great communication skills and has really shown immense
            progress of interaction with his fellow team members. He has shown
            throughout the months that IT is his passion. He is highly
            recommended for work readiness, as he is a young, talented
            individual.
          </div>
          <div className="bottom">
            <h3>Marilize Koen</h3>
            <h4>Facilities Manager at CapaCiTi</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

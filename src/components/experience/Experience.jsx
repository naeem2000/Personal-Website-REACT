import "./experience.scss";

export default function Experience() {
  return (
    <div className="experience" id="experience">
      <h1>Technologies</h1>
      <div className="section">
        <div className="slider">
          <div className="container">
            <div className="item">
              {/* HTML */}
              <figure>
                <img src="assets/html.png" alt="HTML" />
                <figcaption>● Structuring web pages</figcaption>
                <figcaption>● Interacting with native APIs</figcaption>
                <figcaption>● Web Development & Mailers</figcaption>
                <figcaption>● Responsive Web Development</figcaption>
                <figcaption>● Embedding images and videos</figcaption>
              </figure>
            </div>
          </div>
          <div className="container">
            <div className="item">
              {/* CSS */}
              <figure>
                <img src="assets/css.png" alt="CSS" />
                <figcaption>● Animation</figcaption>
                <figcaption>● Media queries</figcaption>
                <figcaption>● CSS selectors</figcaption>
                <figcaption>● CSS Grid Layout</figcaption>
                <figcaption>● CSS Flexible Box Layout</figcaption>
              </figure>
            </div>
          </div>
          <div className="container">
            <div className="item">
              {/* JAVASCRIPT */}
              <figure>
                <img src="assets/js.png" alt="JavaScript ES6" />
                <figcaption>● API's </figcaption>
                <figcaption>● JavaScript ES6</figcaption>
                <figcaption>● Errors & error handling</figcaption>
                <figcaption>● Asynchronous programming</figcaption>
                <figcaption>● Access external data using APIs</figcaption>
                <figcaption>
                  ● Construct functions, higher-order functions to manipulate
                  objects
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="container">
            <div className="item">
              {/* REACT */}
              <figure>
                <img src="assets/react.png" alt="React.JS" />
                <figcaption>50%</figcaption>
                <progress id="react" value="50" max="100"></progress>
              </figure>
            </div>
          </div>
          <div className="container">
            <div className="item">
              {/* SASS */}
              <figure>
                <img src="assets/sass.png" alt="SASS" />
                <figcaption>40%</figcaption>
                <progress id="sass" value="40" max="100"></progress>
              </figure>
            </div>
          </div>
          <div className="container">
            <div className="item">
              {/* FIREBASE */}
              <figure>
                <img src="assets/firebase.png" alt="Firebase" />
                <figcaption>50%</figcaption>
                <progress id="firbase" value="50" max="100"></progress>
              </figure>
            </div>
          </div>
          <div className="container">
            <div className="item">
              {/* NODE */}
              <figure>
                <img src="assets/node.png" alt="Node.JS" />
                <figcaption>40%</figcaption>
                <progress id="node" value="40" max="100"></progress>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

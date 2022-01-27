import "./experience.scss";

export default function Experience() {
    return (
        <div className="experience" id="experience">
                       <h1>Technologies</h1>
            <div className="slider">
                <div className="container">
                    <div className="item">

                        {/* HTML */}
                        <figure>
                        <img src="assets/html.png" alt="HTML" />
                        <figcaption>75%</figcaption>
                            <progress id="html" value="75" max="100"> </progress>
                        </figure>
                        
                        {/* CSS */}
                        <figure>
                        <img src="assets/css.png" alt="CSS" />
                        <figcaption>65%</figcaption>
                            <progress id="css" value="65" max="100">
                            </progress>
                        </figure>
                        
                        
                        {/* JAVASCRIPT */}
                        <figure>
                        <img src="assets/js.png" alt="JavaScript ES6" />
                        <figcaption>45%</figcaption>
                            <progress id="js" value="45" max="100">
                            </progress>
                        </figure>

                        
                        {/* REACT */}
                        <figure>
                            <img src="assets/react.png" alt="React.JS" />
                            <figcaption>40%</figcaption>
                            <progress id="react" value="40" max="100">
                            </progress>
                        </figure>

                        {/* SASS */}
                        <figure>
                        <img src="assets/sass.png" alt="SASS" />
                        <figcaption>40%</figcaption>
                            <progress id="sass" value="40" max="100">
                            </progress>
                        </figure>

                        {/* FIREBASE */}
                        <figure>
                            <img src="assets/firebase.png" alt="Firebase" />
                            <figcaption>50%</figcaption>
                            <progress id="firbase" value="50" max="100">
                            </progress>
                        </figure>
                        
                        {/* NODE */}
                        <figure>
                        <img src="assets/node.png" alt="Node.JS" />
                        <figcaption>30%</figcaption>
                            <progress id="node" value="30" max="100">
                            </progress>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}

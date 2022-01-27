import "./intro.scss";
import { init } from 'ityped';
import { useEffect, useRef } from "react";

export default function Intro() {

    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, { 
            showCursor: true,
            typeSpeed:  100,
            backSpeed:  50,
            backDelay:  1200,
            strings: ['Developer'] })
    },[])
    return (
        <div className="intro" id="intro" >
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/me.png" alt="Mogamat Naeem Carr" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm </h2>
                    <h1>Mogamat Naeem Carr</h1>
                    <h3>Web <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down-icon.png" alt=""/>
                </a>
            </div>
        </div>
    )
}

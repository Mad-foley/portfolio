
import { Link } from "react-scroll";
import ReactTypingEffect from 'react-typing-effect';



export default function Banner() {
    return (
        <>
            <section data-scroll-data="0" id="home" className="home-section bg-gray">
                <div className="container">
                    <div className="row gy-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="home-intro one-page-nav text-center text-lg-start">
                                <h6>Hi 😊 My name is Maddy</h6>
                                <h1>I'm a  <ReactTypingEffect text={["Back-End", "Front-End", "Full-Stack"]}
                                    speed="100" typingDelay="100" eraseDelay="100" /> </h1>
                                    <h1>Developer</h1>
                                <p>In the Greate Philadelphia area.</p>
                                <div className="btn-bar">
                                    <Link className="px-btn px-btn-theme" to="aboutme" smooth={true}>Let's Start</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0">
                            <div className="home-image text-center">
                                <img src={"img/meinjapan.jpg"} title="Banner" alt="Banner"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

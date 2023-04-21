


export default function About() {
    return (
        <>
            <section data-scroll-data="1" id="aboutme" className="section about-section">
                <div className="container">
                    <div className="row gy-5 align-items-center">
                        <div className="col-lg-6 text-center">
                            <img className="circle-img" src="img/rose.jpeg" title="Banner" alt="Banner"/>
                            <div className="personal-art">All art in this portfolio painted by me</div>
                        </div>
                        <div className="col-lg-6 ps-lg-5">
                            <div className="about-text">
                                <h3 className="h1">
                                    I am Full-Stack Software Developer
                                </h3>
                                <p>
                                    From natural language to programming language,
                                    I have always had a love for syntax!
                                </p>
                                <p>
                                    I am a recent Hack Reactor graduate and looking to begin my career in web development.
                                    My interest in programming originally came from linguistics but developed due to my passion for problem solving and life-long learning.
                                </p>
                                <p>
                                    Outside of programming you can probably find me outdoors hiking and doing some casual birding (for which I am also building an app!).
                                </p>
                                <div className="btn-bar pt-4">
                                    <a href="https://github.com/Mad-foley" className="px-btn px-btn-theme me-4">GitHub <i className="fab fa-github"></i></a>
                                    <a href="https://drive.google.com/file/d/1-q3DZ2wAQ0y6SD15U0U2FSISz8l-eYfl/view?usp=sharing" className="px-btn px-btn-dark" to="portfolio">Resume</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

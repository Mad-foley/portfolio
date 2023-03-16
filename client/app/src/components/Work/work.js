
import { Link } from "react-scroll";


export default function Work() {
    return (
        <>
            <section data-scroll-data="4" id="work" className="section work-section bg-gray">
                <div className="container">
                    <div className="row section-heading justify-content-center">
                        <div className="col-lg-6 text-center">
                            <h3><span>Latest Projects</span></h3>
                        </div>
                    </div>
                    <div className="lightbox-gallery portfolio-box">`
                        <div className="row gx-3 pb-3 mb-5 pb-lg-3 mb-lg-3 gy-4 portfolio-box justify-content-around align-items-center">
                            <div className="col-md-6 col-lg-5">
                                <div className="portfolio-img">
                                    <img src="img/mycave.png" title="p1" alt="p1"/>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-5">
                                <div className="portfolio-text">
                                    <h6><span>Web Development</span></h6>
                                    <h4>My Cave</h4>
                                    <p>
                                        Wine social media page that allows individual to login, view, add and like different wines.
                                        Made in an agile team environment.
                                    </p>
                                    <p>
                                        Tool: FastAPI, React, Redux, postgreSQL, Docker, WebSocket, Tailwind-css (light and dark mode)
                                    </p>
                                    <div className="btn-bar">
                                        <a href="https://gitlab.com/team-07-the-fermenters/module3-project-gamma" className="px-btn px-btn-theme" data-scroll-nav="4">View Project</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row gx-3 pb-3 mb-5 pb-lg-3 mb-lg-3 gy-4 portfolio-box justify-content-around align-items-center flex-row-reverse">
                            <div className="col-md-6 col-lg-5">
                                <div className="portfolio-img">
                                    <img src="img/carcar.png" title="p2" alt="p2"/>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-5">
                                <div className="portfolio-text">
                                    <h6><span>Web Development</span></h6>
                                    <h4>CarCar</h4>
                                    <p>
                                    Application created to help car buisness to manage car inventory, employees and appointments.
                                    Worked as a pair in an agile environment to create seperate parts of the application.
                                    </p>
                                    <p>
                                        Tools: Django, React, Docker, Microservices, Bootstrap
                                    </p>
                                    <div className="btn-bar">
                                        <a href="https://gitlab.com/mad-foley/car-car" className="px-btn px-btn-theme" data-scroll-nav="4" >View Project </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row gx-3 pb-3 mb-5 pb-lg-3 mb-lg-3 gy-4 portfolio-box justify-content-around align-items-center">
                            <div className="col-md-6 col-lg-5">
                                <div className="portfolio-img">
                                    <img src="img/flashcard-app.png" title="p3" alt="p3"/>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-5">
                                <div className="portfolio-text">
                                    <h6><span>Web Development</span></h6>
                                    <h4>FlashCard Reviewer</h4>
                                    <p>
                                    Basic Flashcard Management application to keep track of subjects, categories and card sets.
                                    Offers basic user authentication through Django. My first self-made application to practice fundamental web development skills.
                                    </p>
                                    <p>
                                        Tools: Django, HTML, CSS
                                    </p>
                                    <div className="btn-bar">
                                        <a href="https://gitlab.com/mad-foley/flashcards" className="px-btn px-btn-theme" data-scroll-nav="4" >View Project </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row gx-3 gy-4 portfolio-box justify-content-around align-items-center flex-row-reverse">
                            <div className="col-md-6 col-lg-5">
                                <div className="portfolio-img">
                                    <img src="img/placeholder.png" title="p4" alt="p4"/>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-5">
                                <div className="portfolio-text">
                                    <h6><span>Coming Soon!</span></h6>
                                    <h4>Birding Logs</h4>
                                    <p>
                                    Designed for birders to look at, log and learn a little bit about the birds they see.
                                    Basic functionality is to search birds, add comments/sightings and adding birds to a wishlist.
                                    Data of over 900 birds compiled and organized by me. Data sourced from various wikipedia apis.
                                    </p>
                                    <p>
                                    Tools: FastAPI, React, Docker and postgreSQL
                                    </p>
                                    <div className="btn-bar">
                                        <a href="https://gitlab.com/mad-foley/birdinglogs" className="px-btn px-btn-theme" data-scroll-nav="4">View Project </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}

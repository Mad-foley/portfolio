import { useState } from "react";
import { Gallery } from "../Gallery/Gallery";

export default function Work() {
    const [button, setButton] = useState(false)
    const [project, setProject] = useState('')


    const callback = () => {
        return setButton(!button)
    }

    return (
        <>
            {
                button ?
                    <Gallery callback={callback} project={project}/> :
                    null
            }
            <section data-scroll-data="4" id="work" className="section work-section bg-gray">
                <div className="container">
                    <div className="row section-heading justify-content-center">
                        <div className="col-lg-6 text-center">
                            <h3><span>Latest Projects</span></h3>
                        </div>
                    </div>
                      <div className="row gx-3 gy-4 portfolio-box justify-content-around align-items-center flex-row-reverse">
                            <div className="col-md-6 col-lg-5">
                                <div className="portfolio-img">
                                    <img src="img/birdinglogs/birdinglogs.png" title="p4" alt="p4"/>
                                    <button onClick={e => {setProject('birdinglogs'); setButton(!button)}} className="gallery-link gallery-link-icon">
                                        <i className="far fa-folder-open"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-5">
                                <div className="portfolio-text">
                                    <h6><span>Web Development</span></h6>
                                    <h4>Birding Logs</h4>
                                    <div></div>
                                     <p>
                                    Designed for birders to look at, log and learn a little bit about the birds they see.
                                    Basic functionality is to search birds, add comments/sightings and add birds to a wishlist.
                                    Data for over 900 birds compiled and organized by me. Data sourced from various wikipedia apis.
                                    </p>
                                    <p>
                                    Tools: FastAPI, React, Docker, PostgreSQL, CSS, HTML, Tailwind-CSS
                                    </p>
                                     <div className="btn-bar">
                                        <a href="https://github.com/Mad-foley/birdinglogs" className="px-btn px-btn-theme" >View Project </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="lightbox-gallery portfolio-box">
                        <div className="row gx-3 pb-3 mb-5 pb-lg-3 mb-lg-3 gy-4 portfolio-box justify-content-around align-items-center">
                            <div className="col-md-6 col-lg-5">
                                <div className="portfolio-img">
                                    <img src="img/thecave/mycave.png" title="p1" alt="p1"/>
                                    <button onClick={e => {setProject('thecave'); setButton(!button)}} className="gallery-link gallery-link-icon">
                                        <i className="far fa-folder-open"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-5">
                                <div className="portfolio-text">
                                    <h6><span>Web Development</span></h6>
                                    <h4>The Cave</h4>
                                    <p>
                                        Wine social media page that allows individuals to login, view, add and like different wines.
                                        Built in an agile team environment.
                                    </p>
                                    <p>
                                        Tools: FastAPI, React, Redux, PostgreSQL, Docker, WebSocket, Tailwind-css (light and dark mode)
                                    </p>

                                    <div className="btn-bar">
                                        <a href="https://github.com/Mad-foley/the-cave" className="px-btn px-btn-theme">View Code</a>
                                        <a href="https://team-07-the-fermenters.gitlab.io/module3-project-gamma" className="px-btn px-btn-dark ml-3">View Site</a>
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
                                    Application created to help car businesses manage inventory, employees, sales and appointments.
                                    Pair-programmed with a partner to create separate parts of the application.
                                    </p>
                                    <p>
                                        Tools: Django, React, Docker, Microservices, Bootstrap
                                    </p>
                                    <div className="btn-bar">
                                        <a href="https://github.com/Mad-foley/CarCar" className="px-btn px-btn-theme" >View Code</a>
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
                                    Basic flashcard management application to keep track of subjects, categories and card sets.
                                    Offers basic user authentication through Django. My first self-made application to practice fundamental web development skills.
                                    </p>
                                    <p>
                                        Tools: Django, HTML, CSS
                                    </p>
                                    <div className="btn-bar">
                                        <a href="https://github.com/Mad-foley/flashcards" className="px-btn px-btn-theme" >View Code</a>
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

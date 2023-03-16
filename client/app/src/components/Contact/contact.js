

export default function Contact() {
    return (
        <>
        <section data-scroll-data="5" id="contactus" className="section contactus-section bg-dark" style={{ "backgroundImage": "url(/img/effect/bg-effect-3.png)", "backgroundRepeat": "no-repeat", "backgroundSize": "cover", "backgroundPosition": "center"}}>
            <div className="container">
                <div className="row gy-5">
                    <div className="col-lg-6">
                            <p className="lead">Feel free to reach out to me on Linkedin or by email!</p>
                    </div>
                    <div className="col-lg-5 ms-auto col-xl-4">
                        <div className="pb-5">
                            <img className="w-100" src="/img/contact-bg.png" title="" alt=""/>
                        </div>
                        <ul className="contact-infos">
                            <li>
                                <div className="icon bg-1">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="col">
                                    <h5>Mail</h5>
                                    <p>MaddyFoley5@gmail.com</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        </>
     );
}

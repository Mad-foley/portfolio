


function Footer() {
    return (
        <footer className="footer">
            <div className="container">
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
                <div className="row align-items-center">
                    <div className="col-md-6 py-2">
                        <div className="nav justify-content-center justify-content-md-start">
                            <a href='https://https://github.com/Mad-foley'><i className="fab fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/mad-foley/"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-md-6 py-2 text-center text-md-end">
                        <p className="m-0">© 2023 copyright all right reserved</p>
                    </div>
                </div>
            </div>
        </footer>
     );
}

export default Footer;

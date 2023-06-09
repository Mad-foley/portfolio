


function Service(props) {
    return (
        <>
            <div className="">
                <div className={props.id + " feature-box-01"}>
                    <div className="icon"><i className={props.icon}></i></div>
                    <div className="feature-content">
                        <h5>{props.title}</h5>
                        <p>{props.description}</p>

                        <br></br>
                        <p className="font-bold">Skills: {props.stack}{props.link}</p>
                    </div>
                </div>
            </div>
        </>

    );
}


export default function ServiceList() {
    const service_list = [
        {
            id:'bg-1',
            title:'Software Engineer (Freelance)',
            icon:'fas fa-laptop',
            description:'I maintain existing tax software for local municipalities by updating functionality using VB, .NET, MS Access and SQLite. I also collaborate with other contractors by communicating through MSTeams, Outlook and GitHub.',
            stack: 'VB, .NET, MSAccess, SQLite, Git'
        },
        {
            id: 'bg-2',
            title: 'Hack Reactor Graduate',
            icon: 'fas fa-user-graduate',
            description: '900+ hours learning the ins-and-outs of website development with a focus on python and javascript in an agile work environment.',
            stack: 'Python, JavaScript, PostgreSQL, FastAPI and more: ',
            link: <a rel="noopener noreferrer" target="_blank" href="https://drive.google.com/file/d/1-q3DZ2wAQ0y6SD15U0U2FSISz8l-eYfl/view?usp=sharing" className="px-btn px-btn-dark" to="portfolio">Resume</a>
        },
        {
            id: 'bg-3',
            title: 'Linguistics B.A.',
            icon: 'fas fa-user-graduate',
            description: 'I studied linguistics in college with a focus on syntax and semantics. I completed an intro to computer science course and learned basic data analysis utilizing tech listed below.',
            stack: 'R, Praat, Python, CS Theory, Formal Syntax'
        },
        {
            id: 'bg-4',
            title: 'Self-Study',
            icon: 'fas fa-book',
            description: 'I also have studied a lot on my own!',
            stack: 'Node.js, Express.js, Linear Algebra and Data Structures & Algorithms'
        }

    ]
    return (
        <>
           <section data-scroll-data="2" id="services" className="section services-section bg-gray" style={{ "backgroundImage": "url(/img/effect/bg-effect-1.png)", "backgroundRepeat": "no-repeat", "backgroundSize": "cover"}}>
                <div className="container">
                    <div className="row section-heading justify-content-center">
                        <div className="text-center">
                            <h3><span>Experience and Education</span></h3>
                        </div>
                    </div>
                    <div className="row">
                        {
                            service_list.map((val, i)=>{
                                return <Service key={i} id={val.id} title={val.title} icon={val.icon} description={val.description} stack={val.stack} link={val.link}/>
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

import myTools from '../../utilities/constants'


function Skill(props) {

    return (
        <>
            <div className="col-6 col-md-4 col-lg-6">
                    <a target="_blank" href={props.tool.href}>
                <div className={props.tool.color + " feature-box-02 "}>
                <div className="icon">
                        <i className={props.tool.icon}></i>
                    </div>
                    <h6>{props.tool.tool}</h6>
                </div>
                </a>
            </div>

        </>

    );
}



export default function SkillList() {
    return (
        <>
            <section data-scroll-data="3" id="skill" className="section experience-section pb-0">
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <h3 className="m-0"><span>Technical Skills</span></h3>
                            </div>
                            <div className="skill-box">
                                <div className="row g-3">
                                    {
                                        myTools.map((val, i)=>{
                                            return <Skill key={i} tool={val}/>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center">
                            <img src="img/home-banner.jpeg" title="" alt=""/>
                            <div className="personal-art">A doodle of my cat, Pipi</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

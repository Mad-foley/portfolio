
import { Link } from "react-scroll";
import { useState } from "react";


function Menu(props){
    return <li><Link className="nav-link" data-scroll-nav={props.id}  smooth={true} to={props.link}><span>{props.name}</span></Link></li>;
}


export default function Header() {
    const header_menus = [
        { id:0, name:'Home', scroll_link:'home' },
        { id: 1, name:'About Me', scroll_link: 'aboutme'},
        { id:2, name:'Experience', scroll_link:'services' },
        { id:3, name:'Skills', scroll_link:'skill' },
        { id:4, name:'Portfolio', scroll_link:'work' }
    ]

    const [open, setOpen] = useState(true)

    const isOpen = () =>{
        setOpen(!open)
        console.log(open)
    }
    return (
        <>
            <header className="main-header">
                <nav className="navbar header-nav navbar-expand-lg one-page-nav">
                    <div className="container">
                        <Link className="navbar-brand"  smooth={true} to="home">
                            <img className="my-nav-icon circle-img" src="img/sun.jpeg" title="Logo" alt="Logo"/>
                        </Link>
                                <div className={"navbar-collapse " + (open ? 'max-lg:collapse initial' : 'lg:collapse')} id="navbar-collapse-toggle">
                                    <ul className="navbar-nav mx-auto">
                                        {
                                            header_menus.map((val, i) => {
                                                return <Menu key={i} id={val.id} name={val.name} link={val.scroll_link}/>
                                            })
                                        }
                                    </ul>
                                </div>
                        <span className="flex gap mr-1">
                             <button className="p-3"onClick={isOpen}>
                                    <i className="toggle-button fas fa-bars fa-2x"></i>
                            </button>
                            <a className="py-3"href='https://github.com/Mad-foley'><i className="fab fa-github fa-2x"></i></a>
                            <a className="py-3 px-3" href='https://www.linkedin.com/in/mad-foley/'><i className="fab fa-linkedin fa-2x fill-blue"></i></a>
                        </span>
                    </div>
                </nav>
            </header>
        </>
    )
}

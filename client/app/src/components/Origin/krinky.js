
import Header from "../Header/header"
import Banner from "../Banner/banner"
import BrandSlider from "../Brand/brand"
import About from "../About/about"
import ServiceList from "../Service/service"
import SkillList from "../Skills/skill"
import Work from "../Work/work"
import Contact from "../Contact/contact"
import Footer from "../Footer/footer"



export default function Krinky() {
    return (
        <>
            <Header/>
                <main className="wrapper">
                    <Banner/>
                    <BrandSlider/>
                    <About/>
                    <ServiceList/>
                    <SkillList/>
                    <Work/>
                </main>
            <Footer/>
        </>
    )
}

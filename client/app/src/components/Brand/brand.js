
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


function Brand(props){
    return(
        <>
            <div className="p-3 text-center d-flex align-items-center justify-content-center w-100">
                <i className={props.brand_icon}></i>
            </div>
        </>
    )
}


export default function BrandSlider() {
    const Brand_list = [
        { id:1, brand_icon: 'fab fa-python'},
        { id:2, brand_icon: 'fab fa-js'},
        { id:3, brand_icon: 'fab fa-react'},
        { id:4, brand_icon: 'fab fa-docker'},
        { id:5, brand_icon: 'fab fa-html5'},
        { id:6, brand_icon: 'fab fa-css3'},
        { id:7, brand_icon: 'fas fa-database'},
    ]

    return (
        <>
            <div className="bg-dark py-3 py-md-4">
                <div className="container">
                    <Swiper spaceBetween={50} slidesPerView={5}>
                        {
                            Brand_list.map((val, i)=>{
                              return <SwiperSlide key={i}><Brand brand_icon={val.brand_icon}/></SwiperSlide>
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </>
    )
}

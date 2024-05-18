import { Cards } from "../types/Cards";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';


type Props = {
    datas: Cards[];
    
}

export const Projects = ({datas}:Props) => {
    return(
        <section id="projects">

        <div className="title">
            <h2>Projects</h2>
        </div>

            <div className="container_projects" >
                <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                >
                    {datas.map(item => 
                    <SwiperSlide  id="container_projects" >
                        <div  className="Card">
                            <img src={item.url} alt={item.title} />  
                            <h3>{item.title}</h3>
                            <div className="list_tec">
                                <h5>Tecnologias utilizadas</h5>
                                    <p >{item.tecnologys}</p>
                            </div>
                        
                        </div>
                    </SwiperSlide>
                )}
                </Swiper>
                
            </div>
        </section>
    )
}
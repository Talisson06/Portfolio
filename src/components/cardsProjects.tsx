import { useState, useEffect } from 'react'

import { Cards } from "../types/Cards";

import { Swiper, SwiperSlide  } from 'swiper/react'
import 'swiper/css';


type Props = {
    datas: Cards[];
    
}

export const Projects = ({datas}:Props) => {


    const [slidesPerView, setSlidesPerView] = useState(4)

    useEffect(()=> {
        function handleResize(){

            if(window.innerWidth<1375){
                setSlidesPerView(3)
                if(window.innerWidth<1245){
                    setSlidesPerView(2)
                    if(window.innerWidth<1020){
                        setSlidesPerView(1)
                        
                    }
                }
                
            }else{
                setSlidesPerView(4)
            }
            
        }
        handleResize();

        window.addEventListener("resize", handleResize)

        return() => {
            window.removeEventListener("resize", handleResize)
        }
    } )



    return(
        <section id="projects">

        <div className="title">
            <h2>Projects</h2>

        </div>
                <h2>Arraste para o lado nos cards e veja todos meus porjetos!</h2>
            <div id="container_projects"  >

            
                <Swiper
                slidesPerView={slidesPerView}  
                pagination={{ clickable: true}}
                navigation
                    
                
                
                >
                    {datas.map(item => 
                    <SwiperSlide  id="container_projects"  >
                        <a href={item.link} target="blank">
                            <div  className="Card">
                                <img src={item.url} alt={item.title} />  
                                <h3>{item.title}</h3>
                                <div className="list_tec">
                                    <h5>Tecnologias utilizadas</h5>
                                        <p >{item.tecnologys}</p>
                                        
                                </div>
                            
                            </div>
                        </a>
                        
                    </SwiperSlide>
                )}
                </Swiper>
                
            </div>
        </section>
    )
}
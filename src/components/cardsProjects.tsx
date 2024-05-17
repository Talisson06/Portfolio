import { Cards } from "../types/Cards";


type Props = {
    datas: Cards[];
    
}

export const Projects = ({datas}:Props) => {
    return(
        <section id="projects">

        <div className="title">
            <h2>Projects</h2>
        </div>

            <div id="container_projects">
                {datas.map(item => 
                <div key={item.id} className="Card">
                    <img src={item.url} alt={item.title} />  
                    <h3>{item.title}</h3>
                    <div className="test">
                        <h5>Tecnologias utilizadas</h5>
                            <p >{item.tecnologys}</p>
                    </div>
                    
            </div>
                )}
            </div>
        </section>
    )
}
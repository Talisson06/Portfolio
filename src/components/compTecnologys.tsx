import { TecnologysUsed } from "../types/Tecnologys"


type Props = {
    tecnologys: TecnologysUsed[];
}

export const Tecnologys = ( {tecnologys}:Props ) => {

    return(
        <section id="tecnologys">
            <div className="title">
                <h2>Tecnologys</h2>
            </div>
            
            <div id="list_Tecnologys">
                <ul>
                    {tecnologys.map(item =>
                        <li>
                            <img src={item.img} alt={item.tecnology} /> 
                        </li>
                        )}
                </ul>
            </div>

        </section>

    )
} 
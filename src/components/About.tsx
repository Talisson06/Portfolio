
import { About } from "../types/About"

type Props = {
    about: About[];
}

export const Aboutme = ({ about }:Props) => {
    return(


        <main id="about">

            {about.map(item =>
                <div id="aboutme">
                    <div className="title">
                        <h2>{item.title}</h2>
                    </div>
                    <div>
                        <p>{item.paragraph}</p>
                    </div>
                </div>
                )}
                
        </main>
    )
}
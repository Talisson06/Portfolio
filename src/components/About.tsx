import { About } from "../types/About"

type Props = {
    about: About[];
}

export const Aboutme = ({ about }:Props) => {
    return(


        <main>

            {about.map(item =>
                <div id="about">
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
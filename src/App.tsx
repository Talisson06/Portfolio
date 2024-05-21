import { Profile } from "./components/Profile";
import { Aboutme } from "./components/About";
import { Tecnologys } from "./components/compTecnologys";
import { Projects } from "./components/cardsProjects";
import { dataAbout } from "./data/dataAbout";
import { dataCards } from "./data/dataCards";
import { dataTecnologys } from "./data/dataTecnology";
import { Header } from "./components/header";





export default function App() {

  

  return (
    
      <div id="Container">
      

      <Header/>
      
      <Profile
      /> 
      <Aboutme
                    about={dataAbout}
                    
                />

      <Tecnologys
        tecnologys={dataTecnologys}
      />
      <Projects
          datas={dataCards}
        />
      </div>  

  )
}

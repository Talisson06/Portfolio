import { Profile } from "./components/Profile";
import { Aboutme } from "./components/About";
import { Tecnologys } from "./components/compTecnologys";
import { Projects } from "./components/cardsProjects";
import { dataCards } from "./data/dataCards";
import { dataTecnologys } from "./data/dataTecnology";
import { dataAbout } from "./data/dataAbout";



export default function App() {

  

  return (
    
      <>

      <Profile/>  
  
      <Aboutme
        about={dataAbout}
      />
      
      <Tecnologys
        tecnologys={dataTecnologys}
      />
        
      <Projects
          datas={dataCards}
        />
      </>  

  )
}

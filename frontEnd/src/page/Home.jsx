// import System from "../components/system/System";

import Footer from "../components/Footer/Footer"
import Card from '../components/Card/Card'

import Hearder from "../components/Header/Hearder"
import { useState } from "react";
import service from "../services/service.json"
import system from "../services/system.json"
import Middle from "../components/Middle/Middle";
import System from "../components/system/System";
import Mackbook from "../components/Mackbook/Mackbook";

export default function Home() {
  const [systems] = useState(system);
   const [servicea] = useState(service);

    return (
  
  <>
      <Hearder/>

      
      <Middle/>

<div className="invert">
<img
            className="rectangle123"
            src={servicea[0].imageapp}
            alt=""
            style={{ objectFit: "cover"}}
          />
 <System
test={servicea}

/>
</div>

<System
test={systems}

/>


<Card/>

<Mackbook/>
     <Footer/>
    </>
  )
}

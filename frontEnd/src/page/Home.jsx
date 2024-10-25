// import System from "../components/system/System";

import Footer from "../components/Footer/Footer"
import Card from '../components/Card/Card'
import Container from '../components/Container/Container'
import Hearder from "../components/Header/Hearder"
import { useState } from "react";
import service from "../services/service.json"
import system from "../services/system.json"
import Middle from "../components/Middle/Middle";
import System from "../components/system/System";

export default function Home() {
  const [systems] = useState(system);
   const [servicea] = useState(service);

    return (
  
  <>
      <Hearder/>
      {/* <System/> */}
      
      <Middle/>
 <System
test={servicea}

/>

<System
test={systems}

/>


<Card/>

<Container/>
     <Footer/>
    </>
  )
}


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../page/Home";

// import Error from "../page/Error/Error";



const AppRoutes = () => {
  return (
    <Router>
   
    <Routes>
      <Route path="/" element={<Home />} />
  
   
     {/* <Route path="*" element={<Error />} /> */}
    </Routes>
   
  </Router>
  );
};
export default AppRoutes;

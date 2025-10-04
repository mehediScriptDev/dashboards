import { Outlet } from "react-router-dom";
import Nav from "./Components/Header/Nav";
import CTAFooter from "./Pages/CTAFooter";


function App() {

  return (
    <>
    <Nav>
    </Nav>
    <Outlet/>
    <CTAFooter/>
    </>
    
  )
}

export default App

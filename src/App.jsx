import { Outlet } from "react-router-dom";
import Nav from "./Components/Header/Nav";


function App() {

  return (
    <>
    <Nav>
    </Nav>
    <Outlet/>
    </>
    
  )
}

export default App

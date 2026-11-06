import Login from "./Login";
import Reg from "./Reg";
import { Routes, Route } from "react-router-dom";
function App(){
  return (
    <Routes>
      <Route path="/" element={<Reg />}/>
      <Route path="/register" element={<Reg />}/>
      <Route path="/login" element={<Login />}/>
    </Routes>
  )
}

  export default App;
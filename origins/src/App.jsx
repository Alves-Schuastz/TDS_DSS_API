import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Alunos from "./pages/Alunos";
import Professores from "./pages/Professor";
import Salas from "./pages/Salas";



function App() {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/Alunos" element={<Alunos/>} ></Route>
                    <Route path="/Professores" element={<Professores/>} ></Route>
                    <Route path="/Salas" element={<Salas/>} ></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
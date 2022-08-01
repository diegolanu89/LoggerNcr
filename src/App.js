import * as React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainMenu from './components/MainMenu.tsx'
import Loger from "./components/Loger.tsx";

function App() {


      return (
            <div>

                  <BrowserRouter>
                        <Routes>
                              <Route exact path="/" element={
                                    <MainMenu />
                              } />

                              <Route exact path="/loger" element={
                                    <Loger />
                              } />


                        </Routes>

                  </BrowserRouter>

            </div>

      );
}


export default App;
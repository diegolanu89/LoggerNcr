
import InputFile from "./InputFile.tsx"
import { useState, useEffect } from "react"
import React from "react"
import Visor from './Visor.tsx'
import VisorOperacion from './VisorOperacion.tsx'
import VisorSesion from './VisorSesion.tsx'
import './Loger.css'

type data_line = {
  hora?: string | null,
  app: string | null,
  flags: string[] | null,
  info: string | null,
}



export const Loger = () => {

  const [file, setFile] = useState<string[]>([])
  const [sections, setSesiones] = useState<data_line[] | undefined>([])
  // eslint-disable-next-line 
  const [operaciones, setOperaciones] = useState<data_line[] | undefined>([])

  useEffect(() => {
    console.log("FILE NEW")
  }, [file])

  useEffect(() => {
    console.log("CAMBIO LAS SESIONES")
  }, [sections])

  useEffect(() => {
    console.log("CAMBIO LAS OPERACIONES")
    console.log(operaciones)
  }, [operaciones])




  return <div id="conteiner_loger">

    <div id="scroll_logger">
      <InputFile setFile={setFile} />

      <Visor data={file} setSesiones={setSesiones} />

      <VisorSesion data={sections} setOperaciones={setOperaciones} />

      <VisorOperacion data={operaciones} />
    </div>

  </div>

}

export default Loger;
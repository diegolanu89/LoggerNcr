
import InputFile from "./InputFile.tsx"
import { useState, useEffect } from "react"
import React from "react"
import Visor from './Visor.tsx'


export const Loger = () => {

  // eslint-disable-next-line
  const [file, setFile] = useState<string[]>([])

  useEffect(() => {
  }, [])




  return <div>

    <InputFile setFile={setFile} />

    <Visor data={file} />

  </div>

}

export default Loger;
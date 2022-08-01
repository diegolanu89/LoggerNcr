
import InputFile from "./InputFile.tsx";
import { useState,useEffect } from "react";
import React from "react";


export const Loger = () => {

  // eslint-disable-next-line
  const [file,setFile]=useState<string[]>([])
  
  useEffect(() => {
    console.log("HOLA")
}, [])


  
    
    return <div>
       
       <InputFile setFile={setFile}/>
      
    </div>
   

  
}



export default Loger;
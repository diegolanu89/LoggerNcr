
// eslint-disable-next-line 
import { useState, useEffect } from "react";
import React from "react";
import './Node.css'
//import { build_lines } from '../controladores/filtros.ts'

interface Props {
    index?:number,
    data?: data_line
}

type data_line={
    hora?: string|null,
    app: string|null,
    flags: string[]|null,
    info: string|null,
}

export const NodeC = ({ data,index }: Props) => {

    const [flag,setFlag]=useState<string>("")
    

    useEffect(() => {
       data?setFlag(data.flags?data.flags[0]:""):setFlag("")
    }, [data]);



    return <div id="conteiner_nod_cronograms">
        <div>{index}</div>
        <div>{flag}</div>
        

        

    </div>



}



export default NodeC;
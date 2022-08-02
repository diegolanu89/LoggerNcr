
// eslint-disable-next-line 
import { useState, useEffect } from "react";
import React from "react";
import './Node.css'
//import { build_lines } from '../controladores/filtros.ts'

interface Props {
    index:number,
    data?: data_line[]
    select:(e: data_line[]) => data_line[]
}

type data_line={
    hora?: string|null,
    app: string|null,
    flags: string[]|null,
    info: string|null,
}

export const Node = ({ data,select,index }: Props) => {


    const seleccinar_operacion=()=>{
        if(data!==undefined)
            select(data)
    }

    useEffect(() => {
       
    }, []);



    return <div>



        <div id="conteiner_node" >
            <div>{index}</div>
            <div><button onClick={()=>seleccinar_operacion()}> Ver operaciones</button></div>
        </div>

    </div>



}



export default Node;

// eslint-disable-next-line 
import { useState, useEffect } from "react";
import React from "react";
import './Visor.css'
//import { build_lines } from '../controladores/filtros.ts'

interface Props {
    data?: data_line[],
    setOperaciones:(n: data_line[]) => data_line[]
}



type data_line={
    hora?: string|null,
    app: string|null,
    flags: string[]|null,
    info: string|null,
}

export const VisorSesion = ({ data,setOperaciones }: Props) => {
    

    useEffect(() => {
        console.log("sections update");
        setTimeout(() => {
            
        }, 1000)

    }, [data]);



    return <div>



        <div id="conteiner_visor">
            <div>Líneas de la muestras</div>

            <div>
               
            </div>
        </div>

    </div>



}



export default VisorSesion;

// eslint-disable-next-line 
import { useState, useEffect } from "react";
import React from "react";
import './Visor.css'
//import { build_lines } from '../controladores/filtros.ts'

interface Props {
    data?: data_line[]
}

type data_line={
    hora?: string|null,
    app: string|null,
    flags: string[]|null,
    info: string|null,
}

export const VisorOperacion = ({ data }: Props) => {


    

    useEffect(() => {
        setTimeout(() => {
            
        }, 1000)

    }, [data]);



    return <div>



        <div id="conteiner_visor">
            <div>Cronograma de operaciones</div>

            <div>
                
            </div>
        </div>

    </div>



}



export default VisorOperacion;
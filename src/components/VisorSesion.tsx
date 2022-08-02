
// eslint-disable-next-line 
import { useState, useEffect } from "react";
import React from "react";
import './Visor.css'
import { build_sections } from '../controladores/filtros.ts'
import {Node} from './Node.tsx'
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

    const [nodes, setNodes] = useState<any[] | undefined>([])

    useEffect(() => {
        setTimeout(() => {
            if (data !== undefined) {
                build_sections(data).then((e:data_line[][]) => {
                    var components = []
                    for (let i = 0; i < e.length; i++) {
                        components.push(
                                    <Node data={e[i]} select={setOperaciones} index={i}/>
                                )
                    }
                    setNodes(components)
                })
            }
        }, 1000)
        // eslint-disable-next-line 
    }, [data]);



    return <div>


        <div id="conteiner_visor">Secciones</div>

        <div id="conteiner_visor_sesion">
               {nodes}
        </div>

    </div>



}



export default VisorSesion;
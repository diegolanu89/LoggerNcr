
import { useState, useEffect } from "react";
import React from "react";
import './Visor.css'
import { build_lines } from '../controladores/filtros.ts'

interface Props {
    data?: string[]
    setSesiones:(n: data_line[]) => data_line[]
}

type data_line={
    hora?: string|null,
    app: string|null,
    flags: string[]|null,
    info: string|null,
}

export const Visor = ({ data, setSesiones }: Props) => {


    const [lines, setLines] = useState<any[] | undefined>([])
    

    useEffect(() => {
        console.log("Info update");
        setTimeout(() => {
            if (data !== undefined) {
                build_lines(data).then((e:data_line[]) => {
                    var lines = []
                    for (let i = 0; i < e.length; i++) {
                        lines.push(
                                    <div id="linea" key={i + 'l'}>
                                       {e[i].hora?<div id="linea_colum">{e[i].hora}</div>:null}
                                       {e[i].app?<div id="linea_colum">{e[i].app}</div>:null}
                                       {e[i].flags?<div id="linea_colum">{e[i].flags}</div>:null}
                                       {e[i].info?<div id="linea_colum">{e[i].info}</div>:null}
                                    </div>
                                )
                    }
                    if(lines!==undefined){
                        setSesiones(e)
                    }
                    setLines(lines)
                })
            }
        }, 1000)
// eslint-disable-next-line 
    }, [data]);



    return <div>



        <div id="conteiner_visor">
            <div>Líneas de la muestras</div>

            <div id="scroll_visor">
                {lines}
            </div>
        </div>

    </div>



}



export default Visor;
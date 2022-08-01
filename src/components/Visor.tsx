
import { useState, useEffect } from "react";
import React from "react";
import './Visor.css'
import { build_lines } from '../controladores/filtros.ts'

interface Props {
    data?: string[]
}

type data_line={
    hora?: string|null,
    app: string|null,
    flags: string[]|null,
    info: string|null,
}

export const Visor = ({ data }: Props) => {


    const [lines, setLines] = useState<any[] | undefined>([])

    useEffect(() => {
        console.log("Info update");
        setTimeout(() => {
            if (data !== undefined) {
                build_lines(data).then((e:data_line[]) => {
                    var divs = []
                    for (let i = 0; i < e.length; i++) {
                        divs.push(
                                    <div id="linea" key={i + 'l'}>
                                       {e[i].hora?<div id="linea_colum">{e[i].hora}</div>:null}
                                       {e[i].app?<div id="linea_colum">{e[i].app}</div>:null}
                                       {e[i].flags?<div id="linea_colum">{e[i].flags}</div>:null}
                                       {e[i].info?<div id="linea_colum">{e[i].info}</div>:null}
                                    </div>
                                )
                    }
                    setLines(divs)
                })
            }
        }, 1000)

    }, [data]);



    return <div>



        <div id="conteiner_visor">
            <div>Líneas de la muestras</div>

            <div>
                {lines}
            </div>
        </div>

    </div>



}



export default Visor;

// eslint-disable-next-line 
import { useState, useEffect } from "react";
import React from "react";
import './Visor.css'
import {Cronograma} from './Cronograma.tsx'
//import { build_lines } from '../controladores/filtros.ts'

interface Props {
    data?: data_line[]
}

type data_line = {
    hora?: string | null,
    app: string | null,
    flags: string[] | null,
    info: string | null,
}

export const VisorOperacion = ({ data }: Props) => {


    const [linesOp, setLines] = useState<any[] | undefined>([])

    useEffect(() => {

        setTimeout(() => {
            if (data !== undefined) {
                var lines = []
                for (let i = 0; i < data.length; i++) {
                    lines.push(
                        <div id="linea" key={i + 'l'}>
                            {data[i].hora ? <div id="linea_colum">{data[i].hora}</div> : null}
                            {data[i].app ? <div id="linea_colum">{data[i].app}</div> : null}
                            {data[i].flags ? <div id="linea_colum">{data[i].flags}</div> : null}
                            {data[i].info ? <div id="linea_colum">{data[i].info}</div> : null}
                        </div>
                    )
                }
            }
            setLines(lines)
        }, 1000)
        // eslint-disable-next-line 
    }, [data]);



    return <div>


        <div id="conteiner_visor">Cronograma de operación</div>
        <div id="conteiner_operaciones">
            <div id="conteiner_log_operacion">
                {linesOp}
            </div>
                <Cronograma data={data}/>
        </div>
    </div>



}



export default VisorOperacion;
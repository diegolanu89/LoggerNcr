
// eslint-disable-next-line 
import { useState, useEffect, ChangeEvent } from "react";
import React from "react";
import './Visor.css'
import  { Flags } from "../controladores/Flags";
import { NodeC } from "./NodeC.tsx";
import { filter_by_flags } from '../controladores/filtros.ts'

interface Props {
    data?: data_line[]
}

type data_line = {
    hora?: string | null,
    app: string | null,
    flags: string[] | null,
    info: string | null,
}

export const Cronograma = ({ data }: Props) => {

    const [filtro,setFiltro]=useState<string>(Flags.screen)
    const [data_filtered,setFiltered]=useState<data_line[]>([])
    const [nodesC, setNodes] = useState<any[] | undefined>([])

    useEffect(() => {
        setTimeout(() => {
            if (data !== undefined) {
                filter_by_flags(data,[filtro]).then((e:data_line[]) => {
                    setFiltered(e)
                    var components = []
                    for (let i = 0; i < e.length; i++) {
                        components.push(
                                    <NodeC data={e[i]} index={i}/>
                                )
                    }
                    setNodes(components)
                })
               
            }
        }, 1000)

    }, [filtro,data]);

    var options_filter :any[]=[]
    var flags :string[]= Object.values(Flags)
    flags.push('All')
    for(let i=0;i<flags.length;i++){
        options_filter.push(
            <option key={i+'flag'} value={flags[i]}>{flags[i]}</option>
        )
    }

    const handleChangeFiltro=(e: React.ChangeEvent<HTMLSelectElement>) => {
        //console.warn('onChange TextInput value: ' + e.target.value);
        setFiltro(e.target.value)
      }

    return <div id="conteiner_crognograma">

            <div id="selectores_filtros">
                <select className="form-control" id="searchType" onChange={ e => handleChangeFiltro(e) } value={ filtro }>
                    {options_filter}
                </select>
            </div>

            <div id="conteiner_visor">
                {nodesC}
            </div>
       
    </div>

}

export default Cronograma;
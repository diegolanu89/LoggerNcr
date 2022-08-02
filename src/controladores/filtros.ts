import { Flags } from "./Flags";


/*export async function filter_lines_with_flags(lines: string[]): Promise<any> {
    var output: string[] = [];
    var flags = Object.values(Flags)
    lines.forEach((e) => {
        for (let i = 0; i < flags.length && !e.includes(flags[i - 1]); i++) {
            if (e.includes(flags[i])) {
                output.push(e)
            }
        }
    });
    return output
}*/

export const formatNumber = (e: string | number) => {
    var number: number
    if (typeof e === "number") {
        number = e;
    } else {
        number = parseFloat(e)
    }
    return new Intl.NumberFormat(['es-MX'], { minimumFractionDigits: 2, maximumFractionDigits: 2, }).format(number)
}


type data_line={
    hora?: string|null,
    app: string|null,
    flags: string[]|null,
    info: string|null,
}

export async function build_sections(e: data_line[]) {
    try {
        const result = await fragment_sections(e)
        return result
    } catch (err) {
        return err
    }
}

export async function build_lines(e: string[]) {
    try {
        const result = await fragment_lines(e)
        return result
    } catch (err) {
        return err
    }

}

/*LINEAS ===================================================================*/ 

const fragment_lines = (lines: string[]) => {
    var data:data_line[]=[]
    lines.forEach((e) => {
        const info = e.split(' - ')[1]
        var app = ""
        if (info.includes('ConsumerApplication')) app = "ConsumerApplication"
        if (info.includes('SupervisorApplication')) app = "SupervisorApplication"
        var flags_detected: string[] = []
        var flags = Object.values(Flags)
        for (let i = 0; i < flags.length; i++) {
            if (info.includes(flags[i]))
                flags_detected.push(flags[i])
        }
        data.push({
            hora: e.substr(0, 24),
            app: app,
            flags: flags_detected,
            info: identificar_info(flags_detected,info),
        })
    });
    return new Promise(resolve => {
        resolve(data)
    })
}

const identificar_info = (flags_detected:string[],e:string)=>{
    var type_app = ['[ConsumerApplication]','[SupervisorApplication]','\r']
    var info = e
    for(let i=0;i<flags_detected.length;i++){
        info = info.replace(flags_detected[i], '')
    }
    type_app.forEach((e) => {
        info = info.replace(e, '')
    });
    return info.length>1?info:null
}



/*SECCIONES===================================================================*/


const fragment_sections = (lines: data_line[]) => {
    return new Promise(resolve => {
        resolve("data")
    })
}

/*const identificar_section =()=>{

}*/


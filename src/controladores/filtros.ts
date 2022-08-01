import { Flags } from "./Flags";


export async function filter_lines_with_flags(lines: string[]): Promise<any>{

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
}


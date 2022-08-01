import { useState } from "react";
import './InputFile.css'
import { Provider } from "react-redux";
import store from '../store';
import Alert from './Alert';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Styler from '../styler/Styler';
import { Flags } from '../controladores/Flags';
import './InputFile.css'
import React from "react";

const alertOptions = {
    timeout: 3000,
    position: 'top center'
}

type alert={
    message?:string,
}

interface Props {
  setFile?: (n: string[]) => string[]
}

export const InputFile = ({ setFile }: Props) => {

    //const [file, setData] = useState<string[]>([]);
    const [my_style, setStyle] = useState<React.CSSProperties>({}) 
    const[name,setName]=useState("")
    const[alert,setAlert]=useState<alert>({message:''})
   

    const handleFiles = () => {
        var file_uploaded = document.getElementById('file-upload')
        var name_file = (file_uploaded?file_uploaded.files[0].name:false);
        setName(name_file?'':name_file);
        setAlert(name_file?{message:"FILE UPLOAD"}:{message:"ERROR"});
        var flags = Object.values(Flags)
        var output :string []=[];
        var lines : string[]=[] ;
        var reader = new FileReader();

        reader.onload = function(e) {
                lines = e.target.result.split('\n');
                lines.forEach( (e) =>{
                            for(let i=0;i<flags.length && !e.includes(flags[i-1]);i++){
                                    if(e.includes(flags[i]))
                                        output.push(e)
                            }
                });
         }
        //setData(output);
        setFile(output?output:[""])
        reader.readAsBinaryString(document.getElementById('file-upload').files[0]);
    }

    return (
        <div>

            <Provider store={store}>
                <AlertProvider template={AlertTemplate}{...alertOptions}>
                    <Alert message={alert} />
                </AlertProvider>
            </Provider>

           <Styler toggleStyle={setStyle} prop_style={my_style} ></Styler>
           
           <div id="conteiner_file">
                <div id="conteiner_file_2">
                    <div id="tittle_file">Terminal Log</div>
                    <div id="conteiner_input">
                        <label htmlFor="file-upload" className="subir">
                            <i className="fas fa-cloud-upload-alt"></i> Subir archivo
                        </label>
                        <input type="file"
                            id="file-upload"
                            value={name}
                            required onChange={() => handleFiles()}
                            style={{ display: 'none' }}
                        >
                        </input>

                    </div>
                </div>
                    <div id="info">{name}</div>
            </div>

        </div>
    )
}
export default InputFile
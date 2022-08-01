import React from "react";
import { Provider } from "react-redux";
import store from '../store';
import Alert from './Alert';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Styler from '../styler/Styler';
import { Flags } from '../controladores/Flags';
import './InputFile.css'

const alertOptions = {
    timeout: 3000,
    position: 'top center'
}

class InputFile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            explanation: "Loger",
            value: '',
            output: [],
            alert: {},
            style: {

            },
        };
        this.handleFiles = this.handleFiles.bind(this);
        //this.handleText = this.handleText.bind(this);
        this.toggleStyle = this.toggleStyle.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.style !== this.state.style) {
            console.warn("Set style")
        }
    }
    /*==========FOR CHANGE STYLE WITH STYLER INTERFACE======== */
    toggleStyle = (newstyle) => {
        let style = {}
        style = newstyle
        this.setState({ style });
    }
    /*========================================================= */

    /*handleText = e => {
        const content = e.target.result;
        console.log('file content', content);
    }*/

    handleFiles = files => {
        var pdrs = document.getElementById('file-upload').files[0].name;
        document.getElementById('info').innerHTML = pdrs;
        var alert = {}
        alert.message = "FILE UPLOADED";
        this.setState({ alert });
        var flags = Object.values(Flags)
        var output = [];
        var lines = "";
        var myFile = files;
        var reader = new FileReader();
        reader.addEventListener('load', function (e) {
            lines = e.target.result.split('\n');
            lines.forEach( (e) =>{
                        for(let i=0;i<flags.length && !e.includes(flags[i-1]);i++){
                                if(e.includes(flags[i]))
                                    output.push(e)
                        }
            });
        });
        this.setState({ output });
        reader.readAsBinaryString(myFile);
    }



    render() {

        //const style_state = this.state.style

        return <div>
            <Styler toggleStyle={this.toggleStyle} prop_style={this.state.style} ></Styler>

            <Provider store={store}>
                <AlertProvider template={AlertTemplate}{...alertOptions}>
                    <Alert message={this.state.alert} />
                </AlertProvider>
            </Provider>

            <div id="conteiner_file">
                <div id="conteiner_file_2">
                    <div id="tittle_file">Terminal Log</div>
                    <div id="conteiner_input">
                        <label htmlFor="file-upload" className="subir">
                            <i className="fas fa-cloud-upload-alt"></i> Subir archivo
                        </label>
                        <input type="file"
                            id="file-upload"
                            value={this.state.value}
                            required onChange={e => this.handleFiles(e.target.files[0])}
                            style={{ display: 'none' }}
                        >
                        </input>

                    </div>
                </div>
                    <div id="info"></div>
            </div>
           

        </div>;

    }
}

export default InputFile;
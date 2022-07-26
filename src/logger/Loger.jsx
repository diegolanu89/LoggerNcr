import React from "react";
import Result from './Result';

import { Provider } from "react-redux";
import store from '../store';
import Alert from './Alert';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Styler from './Styler';

//Alert option
const alertOptions = {
    timeout: 3000,
    position: 'top center'
}
class Loger extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            explanation: "Loger",
            value: '',
            output: {},
            alert: {},
            style: {
                
            },
        };
        this.handleFiles = this.handleFiles.bind(this);
        this.handleText = this.handleText.bind(this);
        this.toggleStyle = this.toggleStyle.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.style !== this.state.style) {
           console.warn("CHANGE!")
        }
    }
    /*==========FOR CHANGE STYLE WITH STYLER INTERFACE======== */
    toggleStyle = (newstyle) => {
        let style = {}
        style = newstyle
        this.setState({style});
      }
    /*========================================================= */

    handleText = e => {
        const content = e.target.result;
        console.log('file content', content);
    }

    handleFiles = files => {
        var pdrs = document.getElementById('file-upload').files[0].name;
        document.getElementById('info').innerHTML = pdrs;
        var alert = {}
        alert.message = "FILE UPLOADED";
        this.setState({ alert });

        var output = {};
        var lines = "";
        var flags = ["running", "Display"];
        var element = 0;
        var myFile = files;
        var reader = new FileReader();
        reader.addEventListener('load', function (e) {
            lines = e.target.result.split('\n');
            lines.forEach(function (e) {
                var component = e.split(' ');
                var object = {};
                object.date = component[0];
                object.hour = component[1];
                object.type = component[5];
                object.detail = component[6];
                if (flags.includes(component[5])) {
                    object.type += component[6];
                    object.detail = component[7];
                }
                output[element++] = object;
            });
        });
        this.setState({ output });
        reader.readAsBinaryString(myFile);
    }

    render() {

        const style_state = this.state.style

        return <div className="loger">
            <Styler toggleStyle={this.toggleStyle} prop_style = {this.state.style} ></Styler>

            <Provider store={store}>
                <AlertProvider template={AlertTemplate}{...alertOptions}>
                    <Alert message={this.state.alert} />
                </AlertProvider>
            </Provider>
            <div className="visor_0">

                <div id="ssframework" style={ style_state }>
                    <h2 style={ style_state }>SSframework</h2>
                    <div id="inputs">
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
                    <div id="info"></div>
                </div>

                <div id="xfsservice" style={ style_state }>
                    <h2 >Xfsservice</h2>
                    <div id="inputs">
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
                    <div id="info"></div>

                </div>
            </div>
            <div className="visor_1">
                <Result data={this.state.output}></Result>
            </div>

        </div>;

    }
}

export default Loger;
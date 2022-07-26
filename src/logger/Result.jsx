import React from "react";
import DataCash from './DataCash.jsx';
//import DataCash from "./DataCash";

class Result extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            operations: {},
            salida: {},
            show: {},
            selection: {},
        };

        this.show_result = this.show_result.bind(this);
        this.show_selection = this.show_selection.bind(this);

    }

    componentDidUpdate(prevProps) {
        if (this.props.data !== prevProps.data) {
            setTimeout(() => { this.show_result(this.props.data); }, 300);
        }
    }

    show_result = (data) => {
        var ws = require('./readerBapro.js')();
        var operations = ws['get_operations'](data)
        console.log(operations)
        this.setState({ show: operations['cash_in'] })
        this.setState({ operations });

    }

    show_selection = (operation) => {
        var ws = require('./readerBapro.js')();
        var value = {}
        value = ws['get_cash_operation'](operation, this.props.data)
        this.setState({ value });
    }


    render() {
        var operations = []
        operations = this.state.show
        let data = []
        for (var i = 0; i < operations.length; i++) {
            data.push(<button key={i}
                id="button_r"
                onClick={this.show_selection.bind(this, operations[i])} >
                <span>Tipo:Depósito Efectivo</span>
                <span>{operations[i].Hour}</span>
                <span> - Dinero Ingresado:{operations[i].Mount}</span>
            </button>);
        }



        return <div className="result">

            <div id="left_panel">{data}</div>

            {(this.state.value) ?
                <div id="right_panel"><DataCash value={this.state.value}></DataCash></div>
                : null}

        </div>;

    }
}

export default Result;
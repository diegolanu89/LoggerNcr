import React from "react";

class Paleta extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           
            
        };
       
    }

    render() {
       
        return <div className="paleta" id="paleta">
                    <span style={{width:"100%"}}>Background color</span>
                    <div style={{width:"100%"}}>
                        <button id="paleta_prop"  style={{backgroundColor : "green"}} onClick={() => this.props.change('background','green')}></button>
                        <button id="paleta_prop" style={{backgroundColor : "blue"}} onClick={() => this.props.change('background','blue')}></button>
                        <button id="paleta_prop" style={{backgroundColor : "red"}} onClick={() => this.props.change('background','red')}></button>
                        <button id="paleta_prop" style={{backgroundColor : "black"}} onClick={() => this.props.change('background','black')}></button>
                        <button id="paleta_prop" style={{backgroundColor : "white"}} onClick={() => this.props.change('background','white')}></button>
                    </div>
                        
                <div id="buttons">
                    
            </div>
        </div>;
            
    }
}

export default Paleta;
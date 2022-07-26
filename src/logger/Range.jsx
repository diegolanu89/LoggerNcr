import React from "react";

class Range extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 1,

        };
        this.handleChange = this.handleChange.bind(this);
    }



    handleChange = (e) => {
        var display = document.querySelector('.st');
        if (display) {
            console.log("APPLY EFFECT");
            console.log(e)
            console.log("APPly" + e.target.value + " to " + e.target.id)
            display.style.setProperty(`--${e.target.id}`, e.target.value);
        }
        this.setState({ value: e.target.value });
    }

    render() {

        return <div className="paleta" id="paleta">
            <span style={{ width: "100%" }}>{this.props.type}</span>
            <div style={{ width: "100%" }}>
                <label id="range_label">{this.state.value}</label>
                <input value={this.state.value} 
                    id={this.props.type}
                    type="range" 
                    min={this.props.min} 
                    max={this.props.max} 
                    step={this.props.step} 
                    onChange={this.handleChange}>
                </input>
            </div>
        </div>;

    }
}

export default Range;
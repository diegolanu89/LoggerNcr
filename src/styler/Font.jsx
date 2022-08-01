import React from "react";

class Font extends React.Component {

    constructor(props) {
        super(props);
        this.state = {


        };

    }

    render() {

        return <div className="paleta" id="paleta">
            <span style={{ width: "100%" }}>Font size</span>
            <div style={{ width: "100%" }}>
                <button id="font" onClick={() => this.props.change('fontSize', '10px')}>
                    <label style={{ fontSize: "10px" }} >10px</label>
                </button>
                <button id="font" onClick={() => this.props.change('fontSize', '15px')}>
                    <label style={{ fontSize: "15px" }} >15px</label>
                </button>
                <button id="font"onClick={() => this.props.change('fontSize', '20px')}>
                    <label style={{ fontSize: "20px" }} >20px</label>
                </button>
                <button id="font"  onClick={() => this.props.change('fontSize', '25px')}>
                    <label style={{ fontSize: "25px" }} >25px</label>
                </button>
                <button id="font" onClick={() => this.props.change('fontSize', '30px')}>
                    <label style={{ fontSize: "30px" }} >30px</label>
                </button>
            </div>
        </div>;

    }
}

export default Font;
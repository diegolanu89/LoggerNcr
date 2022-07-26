import React from "react";
import Paleta from "./Paleta";
import Font from "./Font";
import Range from "./Range";
class Styler extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            blendtop: 'normal',
            blendbottom: 'normal',
            color:'transparent',
            colorv:'transparent',
            opa:1,
            show_button: false,
            animation: {
                STYLER: '',
            },
        };
        this.handleChangeStyle = this.handleChangeStyle.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }



    handleChangeStyle = (type, choice) => {
        var new_style = this.props.prop_style
        var pair = {}
        pair[type] = choice
        new_style = { ...new_style, ...pair }
        this.props.toggleStyle(new_style)
    };

    set_animation = (id) => {
        var animation = { ...this.state.animation };
        this.state.show_button ? animation[id] = 'out 1s forwards' : animation[id] = 'aparecer 1s forwards';
        this.setState({ animation });
    }

    show_buttons = (id) => {
        var show_button = { ...this.state.show_button };
        this.state.show_button ? show_button = false : show_button = true
        var time = 300
        show_button ? time = 300 : time = 1300
        this.set_animation(id);
        setTimeout(() => { this.setState({ show_button }); }, time)

    }

    handleChange(e) {
        var display = document.querySelector('.st');
        if (display) {
            console.log("APPLY EFFECT");
            console.log(e)
            console.log("APPly" + e.target.value + " to " + e.target.id)
            display.style.setProperty(`--${e.target.id}`, e.target.value);
        }
        var state = e.target.id.replace ("-", "");
        this.setState({ [state]: e.target.value });
    }


    render() {
        const { STYLER } = this.state.animation
        var ruta = require('../images/tuerca.png')
        var options = require('./config_styler.js')()
        var modalButton = {
            backgroundImage: 'url(' + ruta + ')'
        }

        return <div className="styler" id="styler">
            <div id="panels_styler"> </div>

            {(this.state.show_button) ?
                <div id="styler_options">
                    <div style={{ animation: STYLER }}>
                        <div id="prueba" >
                            <Paleta change={this.handleChangeStyle} ></Paleta>
                            <Font change={this.handleChangeStyle} ></Font>
                            <Range change={this.handleChange} type="opa" min="0" max="1" step="0.1"></Range>
                            
                            <button id="styler_prop">Advance Options</button>
                            <form>
                                <div>
                                    <label htmlFor="blend-top">Top Layer</label>
                                    <select id="blend-top" value={this.state.blendtop} onChange={this.handleChange}>
                                        {options['efects']().map((option) => (
                                            <option key={option.label} value={option.value}>{option.label}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="blend-bottom">Middle Layer</label>
                                    <select id="blend-bottom" value={this.state.blendbottom} onChange={this.handleChange}>
                                        {options['efects']().map((option) => (
                                            <option key={option.label} value={option.value}>{option.label}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="color-v">Top Color</label>
                                    <select id="color-v" value={this.state.colorv} onChange={this.handleChange}>
                                        {options['colors']().map((option) => (
                                            <option key={option.label} value={option.value}>{option.label}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="color">Middle Color</label>
                                    <select id="color" value={this.state.color} onChange={this.handleChange}>
                                        {options['colors']().map((option) => (
                                            <option key={option.label} value={option.value}>{option.label}</option>
                                        ))}
                                    </select>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
                : null}


            <div id="buttons">
                <button className="b-style" style={modalButton} onClick={() => this.show_buttons('STYLER')}></button>

            </div>


        </div>;


    }
}

export default Styler;
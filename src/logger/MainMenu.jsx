import React, { Component } from 'react';
import { Link } from "react-router-dom";
//import Loger from './Loger';
//import Cv from '../components/Cv';
import Styler from './Styler';

class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation_r: '',
      text: "",
      updateNoteId: null,
      style: {},  
      data: {
        title: "LOGER APP",
        explain: "Not info at the moment.",
      },

    }
    this.toggleStyle = this.toggleStyle.bind(this);
  }

  

  /*==========FOR CHANGE STYLE WITH STYLER INTERFACE======== */
  toggleStyle = (newstyle) => {
    let style = {}
    style = newstyle
    this.setState({ style });
  }
  /*========================================================= */

  set_animation = (id) => {
    var animations = { ...this.state.animations };
    this.state.buttons[id] ? animations[id] = 'out 2s forwards' : animations[id] = 'aparecer 1s forwards';
    this.setState({ animations });
  }

  set_info = (text) => {
    var texts = require('./info_leyends.js')();
    var data = { ...this.state.data };
    data.explain = texts[text]().info;
    this.setState({ data });
  }

  render() {
    var ruta = require('../images/ncr.jpg');
    const style_state = this.state.style;

    return (
      <div className='st' id='menu_main' >
        <Styler toggleStyle={this.toggleStyle} prop_style = {this.state.style} ></Styler>

        <div className='head' style={ style_state }>
          <div className="w50-left">
            <img alt="item" className="icono" src={ruta}></img>
          </div>
          <div className="w50-right">
            <h1>NCR Tools</h1>
            <p style={ style_state }>Tools of development by & for ncr developers</p>
          </div>
        </div>


        <div className='r-menu' style={ style_state }>
          <div className='bm-menu'><Link to="/logger" >
            <button style={ style_state } className='l-menu' type="button" onMouseOver={this.set_info.bind(this, 'logger')} >Logger</button>
          </Link>
          </div>
          <div className='bm-menu'><Link to="/logger" >
            <button style={ style_state } className='l-menu' type="button" onMouseOver={this.set_info.bind(this, 'tools')}>Tools</button>
          </Link>
          </div>
          <div className='bm-menu'><Link to="/logger" >
            <button style={ style_state } className='l-menu' type="button" onMouseOver={this.set_info.bind(this, 'info')}>Info</button>
          </Link>
          </div>
        </div>

        <div className='detail_footer' style={ style_state }>
          {this.state.data.explain}
        </div>

      </div>
    )
  }
}

export default MainMenu;
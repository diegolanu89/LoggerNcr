import React, { useEffect, useState } from 'react';
import './MainMenu.css'
import { useNavigate } from "react-router-dom";
import ncr from '../images/ncr.jpg';
//import Styler from '../styler/Styler';


export const MainMenu = () => {

  const [info, setInfo] = useState<string>("")
  const navigate = useNavigate();

  const set_info = (text: string) => {
    var texts = require('../funciones/info_leyends.js')();
    setInfo(texts[text]().info)
  }

  useEffect(() => {
    console.log("Menu Principal")
  }, [])


  const navegar = (link: string) => {
    navigate(link);
  }

  //const style_state = this.state.style;
  //<Styler toggleStyle={this.toggleStyle} prop_style = {this.state.style} ></Styler>

  return (
    <div id="main_menu" >

      <div id="icon_div"><img alt="item" className="icono" src={ncr}></img></div>

      <div id="tittle_menu" >
        <div>NCR Tools</div>
        <div>Tools of development by & for ncr developers</div>
      </div>


      <div id="body_menu" >
        <button className='button_menu' onMouseOver={() => set_info('logger')} onClick={() => navegar('/loger')}>Logger</button>
        <button className='button_menu' onMouseOver={() => set_info('tools')} onClick={() => navegar('/loger')}>Tools</button>
        <button className='button_menu' onMouseOver={() => set_info('wiki')} onClick={() => navegar('/loger')}>Wiki</button>
      </div>

      <div className='footer_menu' >
        {info}
      </div>

    </div>

  )
}

export default MainMenu;
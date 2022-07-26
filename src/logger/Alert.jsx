import React, {Component, Fragment} from "react";
import { withAlert } from "react-alert";
import PropTypes from "prop-types";


class Alert extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
          
    };
  }
  
  static propTypes = {
    message: PropTypes.object.isRequired
  }

  componentDidUpdate(prevProps){
    const { alert, message} = this.props;
    /*if(error !== prevProps.error){
      if(error.msg.name)
        alert.error('NAME: ' + error.msg.name);
      if(error.msg.email)
        alert.error('EMAIL: ' + error.msg.email);
      if(error.msg.message)
        alert.error('Message' + error.msg.message.join());
    }*/

    if (message !== prevProps.message){
          alert.success(message.message);
    }
  }

  render() {
    
    return <Fragment />
   

  }
}



export default (withAlert()(Alert));
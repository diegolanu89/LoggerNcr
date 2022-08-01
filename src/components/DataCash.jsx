import React from "react";

class DataCash extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
    
  }

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      console.log("update_cash_info")
    }
}

  render() {
    var val = {}
    val = this.props.value
    let show = []
    for (var i = 0; i < val.log_partition.length; i++) {
        show.push(<div id="line_browser">
                    <div  key={i}>{val.log_partition[i].date}</div> 
                    <div  key={i}>{val.log_partition[i].hour}</div> 
                    <div  key={i}>{val.log_partition[i].type}</div> 
                    <div  key={i}>{val.log_partition[i].detail}</div> 
                  </div>);
    }

    return <div id="Data_Cash">
                <div>Posicion Inicio:{val.end} - Posicion Final:{val.start}</div> 
                {show}
          </div>;
  }
}

export default DataCash;
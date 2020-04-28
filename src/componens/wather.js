import React from "react";

class Wather extends React.Component{
    render(){
        return(
          <div>
                {this.props.city &&
                <div>
                <p>Տարածքը։ {this.props.city}, {this.props.country}</p>
                <p>Ջերմաստիճանը։ {this.props.temp}</p>
                <p>Արևը դուրս է գալիս։ {this.props.sunrise}</p>
                <p>Արևը մայր է մտնում։ {this.props.sunset}</p>
                </div>
                }
          </div>
        );
    }
}

export default Wather;

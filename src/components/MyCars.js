import React, {Component} from "react";
import Car from "./Cars";

class MyCars extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <Car>Ford</Car>
                <Car color="blue">Peugeot</Car>
                <Car color="black"></Car>
            </div>
        );
    }
}

export default MyCars;
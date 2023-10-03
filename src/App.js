import './App.css';
import {Component} from "react";
import MyCars from "./components/MyCars";

class App extends Component {

    state = {
        titre: 'Mon catalogue de voitures'
    }
    render() {
        return (
            <div className="App">
                <MyCars title={this.state.titre}/>
            </div>
        );
    }
}

export default App;

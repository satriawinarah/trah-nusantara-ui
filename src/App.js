import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import kingdoms from './data/kingdom.json';

class App extends React.Component {

    renderKingdom() {
        let rows = [];
        for (let i = 0; i < kingdoms.length; i++) {
            const kingdom = kingdoms[i];
            rows.push(
                <li key={kingdom.id} className={"list-group-item brown-background"} >
                    <a className={"custom-link"} href={"/nobles"}>{kingdom.name} {kingdom.yearStart}-{kingdom.yearEnd} M</a>
                </li>
            );
        }
        return rows;
    }

    render() {
        return (
            <div className={"container-fluid"}>
                <div className={"row"}>
                    <div className={"col-6 position-absolute top-50 start-50 translate-middle old-paper-background"}>
                        <h1>Trah Nusantara</h1>
                        <h4>Silsilah Raja-Raja di Nusantara</h4>
                        <ul className={"list-group kingdom-list scrollable-element"}>
                            {this.renderKingdom()}
                        </ul>
                    </div>
                </div>
            </div>
        )
    };
}

export default App;

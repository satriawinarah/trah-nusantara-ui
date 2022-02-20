import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {

    data = {
        "id": 2,
        "name": "satria",
        "parentId": 1,
        "birth": "",
        "death": "",
        "description": "",
        "children": [
            {
                "id": 3,
                "name": "sri",
                "parentId": 2,
                "birth": "",
                "death": "",
                "description": "",
                "children": []
            },
            {
                "id": 4,
                "name": "atqiya",
                "parentId": 2,
                "birth": "",
                "death": "",
                "description": "",
                "children": []
            }
        ]
    }

    kingdoms = [
        {
            id: 1,
            name: "Salakanagara",
            yearStart: 130,
            yearEnd: 362
        },
        {
            id: 2,
            name: "Tarumanagara",
            yearStart: 362,
            yearEnd: 699
        },
        {
            id: 3,
            name: "Sunda",
            yearStart: 699,
            yearEnd: 1610
        },
        {
            id: 4,
            name: "Kalingga",
            yearStart: 594,
            yearEnd: 695
        },
        {
            id: 5,
            name: "Medang Kamulan",
            yearStart: 732,
            yearEnd: 929
        },
        {
            id: 6,
            name: "Singhasari",
            yearStart: 1222,
            yearEnd: 1292
        },
        {
            id: 6,
            name: "Kediri",
            yearStart: 1045,
            yearEnd: 1222
        },
        {
            id: 7,
            name: "Majapahit",
            yearStart: 1293,
            yearEnd: 1520
        },
        {
            id: 8,
            name: "Sriwijaya",
            yearStart: 650,
            yearEnd: 1377
        },
        {
            id: 9,
            name: "Sriwijaya",
            yearStart: 650,
            yearEnd: 1377
        },
        {
            id: 10,
            name: "Sriwijaya",
            yearStart: 650,
            yearEnd: 1377
        }

    ]

    renderKingdom() {
        let rows = [];
        for (let i = 0; i < this.kingdoms.length; i++) {
            const kingdom = this.kingdoms[i];
            rows.push(
                <li key={kingdom.id} className={"list-group-item brown-background"}>
                    {kingdom.name} {kingdom.yearStart}-{kingdom.yearEnd} M
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

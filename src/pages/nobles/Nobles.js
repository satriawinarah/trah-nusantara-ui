import React from 'react';
import salakaNagara from '../../data/nobles-tree/salaka-nagara.json';
import List from "../../component/List/List";

class Nobles extends React.Component {
    render() {
        return (
            <List data={salakaNagara}/>
        );
    }
}

export default Nobles;
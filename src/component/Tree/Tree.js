import './Tree.css';
import React from 'react';
import data from '../../data/nobles-tree/salaka-nagara.json';
import 'bootstrap/dist/css/bootstrap.min.css';

class Tree extends React.Component {

    renderChildren() {
        let rows = [];
        const children = data.children;
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            rows.push(<li key={child.id}> <button>{child.name}</button></li>);
        }
        return rows;
    }

    render() {
        let data = this.props.data;
        return (
            <div className="container-fluid tree">
                <div className={"row"}>
                    <div className={"col-12"}>
                        <ul>
                            <li>
                                <button>{data.name}</button>
                                {data.children.map(child =>
                                    <Tree data={child}/>
                                )}

                                {/*<ul>*/}
                                {/*    <li>*/}
                                {/*        <button>{data.name}</button>*/}
                                {/*    </li>*/}
                                {/*    <li>*/}
                                {/*        <button>{data.name}</button>*/}
                                {/*        <ul>*/}
                                {/*            <li>*/}
                                {/*                <button>{data.name}</button>*/}
                                {/*            </li>*/}
                                {/*            <li>*/}
                                {/*                <button>{data.name}</button>*/}
                                {/*            </li>*/}
                                {/*            <li>*/}
                                {/*                <button>{data.name}</button>*/}
                                {/*            </li>*/}
                                {/*        </ul>*/}
                                {/*    </li>*/}
                                {/*    <li>*/}
                                {/*        <button>{data.name}</button>*/}
                                {/*    </li>*/}
                                {/*</ul>*/}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tree;

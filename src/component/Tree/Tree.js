import './Tree.css';
import React from 'react';
import data from '../../data/nobles-tree/salaka-nagara.json';
import 'bootstrap/dist/css/bootstrap.min.css';

class Tree extends React.Component {

    render() {
        let data = this.props.data;
        let isChild = this.props.isChild;
        return (
            <div className="container tree">
                <div className={"row"}>
                    <div className={"col-12"}>
                        {isChild ?
                            <li className={"myLi"}>
                                <button>{data.name}</button>
                                {data.children.length > 0 &&
                                    <ul className={"myUl"}>
                                        {data.children.map(child =>
                                            <Tree data={child} isChild={true}/>
                                        )}
                                    </ul>}
                            </li>
                            :
                            <ul className={"myUl"}>
                                <li className={"myLi"}>
                                    <button>{data.name}</button>
                                    {data.children.length > 0 &&
                                        <ul className={"myUl"}>
                                            {data.children.map(child =>
                                                <Tree data={child} isChild={true}/>
                                            )}
                                        </ul>}
                                </li>
                            </ul>
                        }
                    </div>
                </div>

            </div>
        );
    }
}

export default Tree;

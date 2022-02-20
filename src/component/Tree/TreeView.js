import './tree.css';
import React from 'react';

class TreeView extends React.Component {

    renderChildren() {
        let rows = [];
        const children = this.props.data.children;
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            rows.push(<li key={child.id}> <button>{child.name}</button></li>);
        }
        return rows;
    }

    render() {
        return (
            <div className="tree">
                <ul>
                    <li>
                        <button>{this.props.data.name}</button>
                        <ul>
                            {this.renderChildren()}
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

export default TreeView;

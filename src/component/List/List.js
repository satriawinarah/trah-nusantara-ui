import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './List.css';


class List extends React.Component {

    render() {
        let data = this.props.data;

        return(
            <div className={"container-fluid list-component"}>
                <div className={"row"}>
                    <div className={"col-12"}>
                        <ul className={"list-child"}>
                            <li key={data.id}>
                                <span className={"list"}>{data.name}</span>
                                {data.children.map(child =>
                                    <List data={child}/>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

}

export default List;
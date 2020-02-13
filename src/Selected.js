import React, { Component } from "react";
import './Selected.css';

export default class Selected extends Component {

    render() {

       return(

            <div className="filters">

                <h5>Sort yo 'corns...</h5>

                <div className="unicornFilter">      
                    <select className="unicornFilter" onChange={this.props.handleChangeCallback}>
                        <option value="narwhal" defaultValue>Narwhal</option>
                        <option value="rhino" defaultValue>Rhino</option>
                        <option value="unicorn" defaultValue>Unicorn</option>
                        <option value="unilego" defaultValue>UniLego</option>
                        <option value="triceratops" defaultValue>triceratops</option>
                        <option value="mouflon" defaultValue>Mouflon</option>
                        <option value="addax" defaultValue>Addax</option>
                        <option value="chameleon" defaultValue>Chameleon</option>
                        <option value="lizard" defaultValue>Lizard</option>
                        <option value="dragon" defaultValue>Dragon</option>
                    </select>
                </div>
                <div className="unicornFilter">
                    <select className="unicornFilter" onChange={this.props.cuteChange}>
                        <option value="true" defaultValue>cute</option>
                        <option value="false" defaultValue>not so cute</option>
                    </select>
                </div>  
                <div className="unicornFilter">
                    <select className="unicornFilter" onChange={this.props.hornChange}>
                        <option value="1" defaultValue>1</option>
                        <option value="2" defaultValue>2</option>
                        <option value="100" defaultValue>100</option>
                    </select>
                </div>
            </div>
        );
    }
}
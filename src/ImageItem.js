import React, { Component } from "react";
import './ImageItem.css'

export default class ImageItem extends Component {

    render() {
        const imageArray = this.props.images
        const imageElements = imageArray.map((object, i) => {
        return <li className="imageContainer" key={i}>
            <img className="pokeImage" src={object.url} alt={object.title}/>
        </li>
        });
        return(
            imageElements
        );
    }
}
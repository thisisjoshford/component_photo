import React, { Component } from "react";
import ImageItem from './ImageItem.js';

export default class ImageList extends Component {

    render()  { 
        const imageArray = this.props.images
        return( <ul>
            <ImageItem images= {imageArray}/>
            </ul>
        );
    }
}
import React, { Component } from 'react';
import Header from './Header.js'
import ImageList from './ImageList.js'
import images from './data.js'
import request from 'superagent';
import Selected from './Selected.js'

import './App.css';

export default class App extends Component {
  
  state = { selected: null,
    horns: null,
    cute: null,
    type: null

  }
  render(){
    
    const handleChange = e => {
      this.setState({ selected: e.target.value});
    };
    const hornChange = e => {
      this.setState({ horns: e.target.value});
    };
    const cuteChange = e => {
      this.setState({ cute: e.target.value});
    };
    const filteredImages = images.filter(image => {
      if (!this.state.selected) return true;
      return image.keyword === this.state.selected; });


    return (
    <div>
        <Header/>
        <Selected hornChange={hornChange} cuteChange={cuteChange} handleChangeCallback={handleChange} images={images}/>
        <ImageList images={filteredImages}/>
    </div>
    )
  }
}


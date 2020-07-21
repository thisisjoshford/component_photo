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
    const typeChange = e => {
      this.setState({ type: e.target.value});
    };

    
    //filter names
    const filter1 = images.filter(image => {
      if (!this.state.selected) return true;
      return image.keyword === this.state.selected; });
    //filter horns
    const filter2 = filter1.filter(image =>{
      if(!this.state.horns) return true;
      return image.horns === parseInt(this.state.horns);});
    //filter cute
    const filter3 = filter2.filter(image =>{
      if(!this.state.cute) return true;
      return image.cute === this.state.cute;});
    //filter photo(type)
    const filter4 = filter3.filter(image =>{
      if(!this.state.type) return true;
      return image.type === this.state.type;});


    return (
    <div>
        <Header/>
        <Selected hornChange={hornChange} cuteChange={cuteChange} handleChangeCallback={handleChange} typeChange={typeChange} images={images}/>
        <ImageList images={filter4}/>
    </div>
    )
  }
}


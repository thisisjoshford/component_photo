import React, { Component } from 'react';
import Header from './Header.js'
import ImageList from './ImageList.js'
import images from './data.js'

import './App.css';

export default class App extends Component {
  state = { selected: null};
  render(){
    const handleChange = e => {
      this.setState({ selected: e.target.value});
    };
    const filteredImages = images.filter(image => {
      if (!this.state.selected) return true;
      return image.keyword === this.state.selected; });
    return (
      <div>
        <Header/>
        <div>
           <select className="unicornFilter" onChange={handleChange}>
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
        <ImageList images={filteredImages}/>
      </div>
    )
  }
}
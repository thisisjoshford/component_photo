import React from 'react';
import Header from './Header.js'
import ImageList from './ImageList.js'
import images from './data.js'

import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <ImageList images={images}/>
    </div>
  );
}
export default App;

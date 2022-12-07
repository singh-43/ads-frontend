import React, { Component } from 'react';
import './App.css';
import Searchbox from './components/Searchbox/Searchbox';
import ShowAds from './components/ShowAds/ShowAds'

class App extends Component{

  render(){
    return (
      <div className="tc">        
          <Searchbox />
          {/*<Showadds />*/}
      </div>
    );
  }
}

export default App;

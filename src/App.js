import React,{ Component } from 'react';
import './App.css';
import Searchbox from './components/Searchbox/Searchbox';
import ShowAds from './components/ShowAds/ShowAds';
// import ShowAds from './components/ShowAds/ShowAds';

class App extends Component{
  constructor() {
    super();
    this.state = {
      input: '',
      search: ''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({search:this.state.input});
  }

  render(){
  
    return (
      <div className="tc">
        <div>
          <Searchbox
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit}
          />   
          { this.state.search.length === 0?
            <></>
            :            
            <ShowAds search={this.state.search} className="center"/>            
          }
        </div>
      </div>
    );
  }
}

export default App;

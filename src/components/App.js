import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import './app.css'
import HogsConstainer from './HogsContainer'
// import '../hog-imgs'



class App extends Component {
  constructor(props){;
    super(props);

    this.state={
      hogs: hogs,
      filterHogs:[]
    }
    
  }

  renderHogs=(hgs)=>{
    if(hgs.length > 1 )
      return hgs.map((hog, i)=><Nav key={i} id={i} singleHog={false} showHogsDet={this.showHogsDet} hog={hog}/>)
    else
      return <Nav id={1} singleHog={true} resetHogs={this.resetHogs} showHogsDet={this.showHogsDet} hog={hgs}/>
  }

  showHogsDet=(hog)=>{
  
      this.setState({
      hogs: hog
      })
  }

  resetHogs=()=>{
    this.setState({hogs})
  }

  render() {
    return (
      <div className="App">
        <span className="headerText">Hogwarts</span>
        <HogsConstainer hogList={this.state.hogs}/>
          {/* {this.renderHogs(this.state.hogs)} */}
      </div>
    )
  }
}

export default App;

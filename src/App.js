// Components
import React, { Component } from 'react';
import Body from './components/body/element.js'
import NavBar from './components/navbar/element.js'
import Footer from './components/footer/element.js'


// Static Files
import './App.css';




class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <table id="hnmain" width="85%" cellspacing="0" cellpadding="0" border="0" bgcolor="#f6f6ef">
        <tbody>
        <NavBar />  
        <Body />  
        <Footer />
        </tbody>
      </table>
    );
  }
}

export default App;

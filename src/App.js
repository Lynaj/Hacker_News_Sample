// Components
import React, { Component } from 'react';
import Body from './components/body/main_view/element.js'
import PostView from './components/body/post_view/element.js'
import NavBar from './components/navbar/element.js'
import Footer from './components/footer/element.js'

import CardContainer from './components/pp/element.js'


// Static Files
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <table id="hnmain" style={{'margin': 'auto' }} width="85%" cellspacing="0" cellpadding="0" border="0" bgcolor="#f6f6ef">
        <tbody>
        <CardContainer />
        <NavBar />  
        <tr id="pagespace" title="Submissions from helpnetsecurity.com" style={{ 'height': '10px' }}></tr>
        <Body />  
        <tr id="pagespace" title="Submissions from helpnetsecurity.com" style={{ 'height': '10px' }}></tr>
        <Footer />
        </tbody>
      </table>
    );
  }
}

export default App;

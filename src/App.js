// Components
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  browserHistory
 } from 'react-router-dom';


import NoMatch from './components/misc/NoMatch/element.js'
import Body from './components/body/main_view/element.js'
import PostView from './components/body/post_view/element.js'
import CommentsView from './components/body/comments_view/element.js'
import NavBar from './components/navbar/element.js'
import Footer from './components/footer/element.js'

// Static Files
import './App.css';


function newsComponent(props) {
  return (
    <div>
      News
    </div>
  )
}

const newsCOmponentConst = () => {

  const local_value = () => {
    return 15
  };

  window.map = this;
  
  return (
    <div> Newwwss neww { local_value() } </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <table id="hnmain" style={{'margin': 'auto' }} width="85%" cellspacing="0" cellpadding="0" border="0" bgcolor="#f6f6ef">
        <tbody>
        <NavBar />
        <tr id="pagespace" title="Submissions from helpnetsecurity.com" tyle={{ 'height': '10px' }}></tr>
       
        <Router>
          <Switch>

            <Route path={"/item"} component={CommentsView}>
              <Route path={"/item/:id"} component={newsComponent} />
            </Route>

            <Route path={"/news"} component={newsCOmponentConst} />
            <Route path={"/"} component={Body} />
            <Route component={NoMatch}/>

          </Switch>
        </Router>

        <tr id="pagespace" title="Submissions from helpnetsecurity.com" style={{ 'height': '10px' }}></tr>
        <Footer />
        </tbody>
      </table>
    );
  }
}

export default App;

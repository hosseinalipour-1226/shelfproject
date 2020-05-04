  
import React, {Component} from 'react';
import MainPage from './MainPage';
import {BrowserRouter as Router , Route , Switch , Link , Redirect } from 'react-router-dom';
import Writeinbook from './WriteInBook/Writeinbook'
import Writeinbooklend from './WriteInBook/Writeinbooklend'
import ChoosePage from './WriteInBook/choosepage';
import Writeinbookebook from './WriteInBook/Writeinbookebook'
import Writeinbooklecture from './WriteInBook/Writeinbooklecture'

class App extends Component{
  render(){
    return (
      <Router>
        <Route exact path ="/" component={MainPage} />
        <Route exact path ="/writein" component = {ChoosePage} />
        <Route exact path="/sell" component= {Writeinbook} />
        <Route exact path ="/Borrow" component = {Writeinbooklend} />
        <Route exact path="/E-Book" component= {Writeinbookebook} />
        <Route exact path="/Lecture" component= {Writeinbooklecture} />
      </Router>
    );
  }
}

export default App;

//
//<Route exact path="/WriteInBook" component={WiNavbar}/>
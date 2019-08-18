import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Homepage from "./pages/Homepage.component";
import './App.css';
function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path="/" component={Homepage}/>
        </Switch>
    </div>
  );
}

export default App;

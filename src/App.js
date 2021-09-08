import React from 'react';
import './App.css';
import Layout from './Components/Layout/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import axios from 'axios';
import { SWRConfig } from 'swr';

function App() {

  const fetcher = (...args) => axios.get(...args).then(res => res);


  return (
    <div className="App">
      <Layout>
        <Router>
          <SWRConfig value={{fetcher}}>
            <Switch>
              <Route exact path="/" >
                <Home />
              </Route>
            </Switch>
          </SWRConfig>
        </Router>
      </Layout>
    </div>
  );
}

export default App;

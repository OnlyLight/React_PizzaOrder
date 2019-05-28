import React, {Component} from 'react';
import './App.css';

import withLoadLayout from "./component/withLoadLayout";
import Layout from "./component/Layout";

const ActiceWithLoadLayout = withLoadLayout(Layout);

class App extends Component {
  render() {
      return (
          <div className="App">
              <ActiceWithLoadLayout />
          </div>
      );
  }
}

export default App;

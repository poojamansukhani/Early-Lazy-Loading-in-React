import React, { Component } from 'react';
import {Layout} from './components/Layout'

import {Heading} from './components/Heading'
import {SpaFooter} from './components/SpaFooter'

class App extends Component {
  render() {
    return (
      <div>
        <Heading/>
          <div>
              <Layout />
          </div>
        <SpaFooter/>
      </div>
    );
  }
}
export default App;




import React, { Component } from 'react';
import generateStore from './store';
import { Provider } from 'react-redux';
import initialStateHelper from './helpers/initialStateHelper';
import PanelContainer from './contianers/PanelContainer'

const store = generateStore(initialStateHelper.initialState());

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <PanelContainer />
      </Provider>
    );
  }
}

export default App;

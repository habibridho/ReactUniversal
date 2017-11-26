import React, { Component } from "react"
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'
import App from './mobile/App';
import store from "./redux/reducer"

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    )
  }
}

AppRegistry.registerComponent('ReactUniversal', () => Root);

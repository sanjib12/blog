import React, { Component } from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import store from "./config/store";
import NavContainer from "./containers/Navigate/NavContainer";

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <NavContainer />
            </Provider>
        )
    }
};

AppRegistry.registerComponent('usermange', () => App);

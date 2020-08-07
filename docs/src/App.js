import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { View } from "bootstrap-design-system";

class App extends Component {
    render() {
        return (
            < View
                print="none"
                py={"2.5rem"}
                textAlign="center"
            >
                &copy; 2020 Rahul Katariya. All rights reserved.
            </View >
        );
    }
}

export default hot(module)(App);
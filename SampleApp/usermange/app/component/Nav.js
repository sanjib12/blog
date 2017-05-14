import React, { Component } from "react";
import { NavigationExperiment } from "react-native";

const { CardStack } = NavigationExperiment;

export default class Nav extends Component {

    constructor(props) {
        super(props);
        this.__renderScene = this.renderScene.bind(this);
    }

    __renderScene(sceneProps) {
        const route = sceneProps.scene.route;
        console.log(route);
        <route.component {...route.props} push={this.props.push} pop={this.props.pop} />
    }

    render() {
        return (
            <CardStack 
                navigationState={this.props.navigation}
                onNavigateBack={this.props.pop}
                renderScene={this.__renderScene}
            />
        );
    }
}
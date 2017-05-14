import { NavigationExperimental } from "react-native";
import { NAVIGATION_PUSH, NAVIGATION_POP } from "./../actions";
import routes from "./../config/route";

var initialState = {
    index: 0,
    routes: [
        routes.login
    ]
};

const { StateUtils } = NavigationExperimental;

export default (state = initialState, actions) => {
    const { type } = actions;
    switch( type ) {
        case NAVIGATION_PUSH: 
            return StateUtils.push(state, routes[ actions.payLoad ]);
        
        case NAVIGATION_POP: 
            return StateUtils.pop( state );

        default:
            return state;
        
    }
}
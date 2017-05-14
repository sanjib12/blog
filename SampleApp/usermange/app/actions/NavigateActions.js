import { NAVIGATION_PUSH, NAVIGATION_POP } from "./../actions";

export const push = (key) => ({
    type: NAVIGATION_PUSH,
    routeKey: key
});

export const pop = () => ({
    type: NAVIGATION_POP
});
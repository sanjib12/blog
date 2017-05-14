import { connect } from "react-redux";
import { push, pop } from "./../../actions/NavigateActions";
import Nav from "./../../component/Nav";

const mapStateToProps = state => ({
    navigation: state.navigate
});

const mapDispatchToProps = dispatch => ({
    push: (key) => dispatch(push(key)),
    pop: () => dispatch(pop())
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
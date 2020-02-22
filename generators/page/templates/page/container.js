import {compose, lifecycle} from "recompose";
import {connect} from "react-redux";
import View from "./<%= name %>.js";

export default compose(
    connect(
        state => ({}),
        {}
    ),
    lifecycle({
        componentWillMount() {
        }
    })
)(View);

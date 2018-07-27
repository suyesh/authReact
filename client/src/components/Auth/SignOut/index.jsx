import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signout } from 'Actions';

class SignOut extends Component {
	componentDidMount = () => {
		this.props.signout();
	};
	render() {
		return <div>Sorry to see you go</div>;
	}
}

const actions = {
	signout
};

export default connect(
	null,
	actions
)(SignOut);

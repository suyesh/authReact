import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { signup } from 'Actions';

class SignUp extends Component {
  onSubmit = (formProps) => {
    this.props.signup(formProps, () => {
      this.props.history.push('/feature');
    })
  }
  render() {
    const { handleSubmit } = this.props
    return(
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>

        <fieldset>
          <label>Password</label>
          <Field
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <div>{ this.props.errorMessage }</div>
        <button>Sign up!</button>
      </form>
    )
  }
}

const actions = {
  signup
}

const mapStateToProps = ({ auth }) => ({
  errorMessage: auth.errorMessage
})

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signup' })
)(SignUp);

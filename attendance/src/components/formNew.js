import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import formField from './formField';
import invalidEmails from './validateEmails';

const FIELDS = [
	{ label: 'Attendee Name', name: 'attendee'},
	{ label: 'Bride or Groom Side', family: 'family'},
	{ label: 'Email Address', name: 'contact'}
];

class formNew extends Component {
	renderFields(){
		return _.map(FIELDS, ({ label, name }) => {
			return <Field key={name} component={FormField} type="text" label={label} name={name} />
		});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(values => console.log(values))}>
					{this.renderFields()}
					<button type="submit" className="teal btn-flat right white-text">
						Submit
						<i className="material-icons right">done</i>
					</button>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};

	errors.contacts = validateEmails(values.emails || '');

	_.each(FIELDS, ({ name }) => {
		if (!values[name]) {
			errors[name] = 'Please provide your entry!';
		}
	});

	return errors;
}

export default reduxForm({
	validate,
	form: 'formNew'
})(formNew);
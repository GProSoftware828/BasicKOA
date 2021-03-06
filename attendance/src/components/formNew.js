import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import formField from './formField';
import invalidEmails from './validateEmails';
import FormReview from './FormReview';
import formAutos from './formAutos';

class formNew extends Component {
	state = { showFormReview: false };

	renderContent() {
		if (this.state.showFormReview) {
			return <FormReview 
				onCancel={() => this.setState({ showFormReview: false})}
			/>;
		}

		return (
			<formNew 
			onFormSubmit={() => this.setState({ showFormReview: true })}
			/>
		);
	}

	renderFields(){
		return _.map(formAutos, ({ label, name }) => {
			return <Field key={name} component={FormField} type="text" label={label} name={name} />
		});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(this.props.onFormSubmit)}>
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

	_.each(formAutos, ({ name }) => {
		if (!values[name]) {
			errors[name] = 'Please provide your entry!';
		}
	});

	return errors;
}

export default reduxForm({
	validate,
	form: 'formNew',
	destroyOnUnmount: false
})(formNew);
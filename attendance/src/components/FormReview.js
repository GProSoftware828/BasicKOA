//FormReview shows users their form inputs for editing
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formAutos from './formAutos';
import * as actions from '../actions';

const FormReview = ({ onCancel, formValues, submitForm }) => {
	const reviewAutos = _.map(formAutos, ({ name, label }) => {
		return (
			<div key={name}>
			<label>{label}</label>
				<div>
					{formValues[name]}
				</div>
			</div>
		);
	});

	return (
		<div>
			<h5>Please confirm or edit your guest details</h5>
			{reviewFields}
			<div>
				<div>
					<label>Attendee</label>
					<div>{formValues.attendee}</div>
				</div>
				<div>
					<label>Bride or Groom</label>
					<div>{formValues.family}</div>
				</div>
				<div>
					<label>Email Address</label>
					<div>{formValues.contact}</div>
				</div>
			</div>
			<button
				onClick={submitForm(formValues)}
				className="blue dark-1 white-text btn-flat right"
				onClick={onCancel}
			/>
				Save
			</button>
			<button
				className="blue dark-1 white-text btn-flat left"
				onClick={onCancel}
			/>
				Go Back
			</button>
		</div>
	);
};

function mapStateToProps(state) {
	return { formValues: state.form.Form.values };
}

export default connect(mapStateToProps, actions)(FormReview);
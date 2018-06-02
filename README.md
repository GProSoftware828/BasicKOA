# Introduction

This is an app for guests at a wedding to put in their attendance upon arrival built with a KOA server.

Currently working on the troubleshooting. Building this app on the side.

## Strange React error, but also after this ```javascript export default ``` coding needed:

![Commented out still error](http://i64.tinypic.com/2eaor9x.jpg)

## Example:

```javascript

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

```

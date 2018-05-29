import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import simpleReduxForm from 'simple-redux-form'
const fields = ['firstName', 'lastName'];
function validate(values) {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  return errors;
}

const MyNewForm = ({ fields: {firstName, lastName } }) => (
  <form>
    <input {...firstName} />
    <input {...lastName} />
  </form>
)

export default simpleReduxForm(simpleForm,
 { 
  form: 'test',
  fields, 
  validate,
});


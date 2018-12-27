import React from 'react';
import FormField from './FormField';
import FormGroup from './FormGroup';

class FormSugar {
  static field([fieldName, type, value, validators, onChange]) {
    return (
      <FormField
        key={fieldName}
        fieldName={fieldName}
        type={type}
        value={value}
        validators={validators}
        onChange={onChange}
      />
    );
  }

  static group([groupName, formFields, onChange, value]) {
    return (
      <FormGroup groupName={groupName} onChange={onChange} value={value}>
        {formFields}
      </FormGroup>
    );
  }
}

export default FormSugar;

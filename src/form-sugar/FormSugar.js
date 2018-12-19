import React from 'react';
import FormField from '../form-field/FormField';
import FormGroup from '../form-group/FormGroup';

class FormSugar {
  static field(values) {
    return (
      <FormField
        key={values[0]}
        fieldName={values[0]}
        type={values[1]}
        value={values[2]}
        validators={values[3]}
        onChange={values[4]}
      />
    );
  }

  static group(values) {
    return (
      <FormGroup groupName={values[0]} onChange={values[2]} values={values[3]}>
        {values[1]}
      </FormGroup>
    );
  }
}

export default FormSugar;

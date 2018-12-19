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
        onBlur={values[5]}
        errors={values[6]}
        disabled={values[7]}
        touched={values[8]}
        valid={values[9]}
      />
    );
  }

  static group(values) {
    return (
      <FormGroup
        groupName={values[0]}
        onChange={values[2]}
        onBlur={values[3]}
        values={values[4]}
        errors={values[5]}
        valid={values[6]}
      >
        {values[1]}
      </FormGroup>
    );
  }
}

export default FormSugar;

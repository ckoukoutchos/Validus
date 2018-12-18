import React from 'react';
import FormField from '../form-field/FormField';

class FormSugar {
  static field([
    fieldName,
    type,
    value,
    validators,
    onChange,
    onBlur,
    disabled,
    errors,
    touched,
    valid
  ]) {
    return (
      <FormField
        fieldName={fieldName}
        type={type}
        value={value}
        validators={validators}
        onChange={onChange}
        onBlur={onBlur}
        errors={errors}
        disabled={disabled}
        touched={touched}
        valid={valid}
      />
    );
  }
}

export default FormSugar;

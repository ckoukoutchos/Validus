import React from 'react';
import FormField from '../form-field/FormField';
import FormGroup from '../form-group/FormGroup';

class FormSugar {
  static field([fieldName, type, value, formCheck, onChange]) {
    return (
      <FormField
        key={fieldName}
        fieldName={fieldName}
        type={type}
        value={value}
        formCheck={formCheck}
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

import React from 'react';
import './Field.css';

const field = props => {
  return (
    <main>
      <section>
        <div className="card__well">
          <h1 className="title">FormField</h1>
          <p className="sub-title">
            React wrapper component that tracks the state of a html input
            element
          </p>
        </div>

        <div className="card__detail">
          <div classNameName="card__header">
            <h2>&ltFormField&gt Component</h2>
          </div>
          <div className="card__content">
            <p>
              <strong>Required Props:</strong>
            </p>
            <p className="code">fieldName: string</p>
            <p className="code">type: string</p>
            <p>
              <strong>Optional Props:</strong>
            </p>
            <p className="code">disabled: boolean = false</p>
            <p className="code">errors: object | boolean = false</p>
            <p className="code">
              formCheck: <a href="form-check.html">FormCheck</a>[] = []
            </p>
            <p className="code">style: object = {}</p>
            <p className="code">touched: boolean = false</p>
            <p className="code">value: any = ''</p>
            <p className="code">valid: boolean = false</p>
            <p className="code">onBlur: function(formState: object)</p>
            <p className="code">onChange: function(formState: object)</p>
            <p className="code">children: child elements</p>
            <hr />
            <p>
              <strong>Example:</strong>
            </p>
            <p className="code">
              &ltFormField fieldName={'{'}'name'{'}'} type={'{'}'text'{'}'}{' '}
              value={'{'}'Sally'{'}'}
              formCheck={'{'}FormCheck.required]{'}'} onChange={'{'}someFunction
              {'}'} disabled style={'{{'} color: blue {'}}'} touched valid/&gt
            </p>
          </div>
        </div>

        <div className="card__detail">
          <div className="card__header">
            <h2>Description</h2>
          </div>
          <div className="card__content">
            <p>
              FormField components wrap a html input element, keeping track of
              their current state, and can be configured to inform parent
              components when the state changes.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="card__detail">
          <div className="card__header">
            <h2>Props</h2>
            <p>Details for properties that can be passed</p>
          </div>
          <div className="card__content">
            <table>
              <thead>
                <tr>
                  <td>
                    <h3>Prop Name</h3>
                  </td>
                  <td>
                    <h3>Description</h3>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="code">fieldName: string</td>
                  <td>
                    Unique name by which to identify the FormField
                    <strong>Required</strong>
                  </td>
                </tr>
                <tr>
                  <td className="code">type: string</td>
                  <td>
                    Sets type of input field: 'text', 'number', 'email',
                    'password', 'search', 'checkbox', 'radio'
                    <strong>Required</strong>
                  </td>
                </tr>
                <tr>
                  <td className="code">disabled: boolean</td>
                  <td>
                    Disables input when set to true. Default value is false
                  </td>
                </tr>
                <tr>
                  <td className="code">errors: object | boolean</td>
                  <td>
                    Sets errors on input: false if the input is valid or an
                    object with the error names as fields and any additional
                    info about the errors as the values. Default value is false.
                  </td>
                </tr>
                <tr>
                  <td className="code">
                    formCheck: <a href="form-check.html">FormCheck</a>[]
                  </td>
                  <td>
                    Array of FormCheck functions to run when input value changes
                    or on input blur. Default value is an empty array.
                  </td>
                </tr>
                <tr>
                  <td className="code">style: object</td>
                  <td>
                    Sets inline styling. Default value is an empty object.
                  </td>
                </tr>
                <tr>
                  <td className="code">touched: boolean</td>
                  <td>
                    Sets whether input has been touched. Default value is false.
                  </td>
                </tr>
                <tr>
                  <td className="code">value: any</td>
                  <td>
                    Sets the input's value. default value is empty string.
                  </td>
                </tr>
                <tr>
                  <td className="code">valid: boolean</td>
                  <td>
                    Manually sets whether the input is valid. Default value is
                    false;
                  </td>
                </tr>
                <tr>
                  <td className="code">onBlur: function(formState: object)</td>
                  <td>
                    <p>
                      Function called whenever an onBlur event is triggered for
                      the input. The function will automatically be passed the
                      FormField's current state.
                    </p>
                    <p>
                      By default, no function will be executed onBlur unless one
                      is passed as a prop.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="code">
                    onChange: function(formState: object)
                  </td>
                  <td>
                    <p>
                      Function called whenever an onChange event is triggered
                      for the input. The function will automatically be passed
                      the FormField's current state.
                    </p>
                    <p>
                      By default, no function will be executed onChange unless
                      one is passed as a prop.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="code">children: child elements</td>
                  <td>Any children html elements to render.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
};

export default field;

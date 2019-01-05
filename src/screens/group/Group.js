import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../UI/footer/Footer';
import NavBar from '../../UI/navbar/NavBar';
import './Group.css';

const group = props => {
  return (
    <>
      <NavBar />
      <main>
        <section>
          <div className="card__well">
            <h1 className="title">FormGroup</h1>
            <p className="sub-title">
              React wrapper component that tracks the state of an aribratry
              number of FormFields
            </p>
          </div>

          <div className="card__detail">
            <div className="card__header">
              <h2>{'<FormGroup>'} Component</h2>
            </div>
            <div className="card__content">
              <p>
                <strong>Required Props:</strong>
              </p>
              <p className="code">groupName: string</p>
              <p>
                <strong>Optional Props:</strong>
              </p>
              <p className="code">errors: object | boolean = false</p>
              <p className="code">style: object = {'{}'}</p>
              <p className="code">value: object = {'{}'}</p>
              <p className="code">valid: boolean = false</p>
              <p className="code">onBlur: function(formState: object)</p>
              <p className="code">onChange: function(formState: object)</p>
              <p className="code">onSubmit: function(formState: object)</p>
              <p className="code">
                children: <Link to="/form-field">{'<FormField>'}</Link> | child
                elements
              </p>
              <hr />
              <p>
                <strong>Example:</strong>
              </p>
              <p className="code">
                {'<FormGroup>'} groupName={'{'}'login'{'}'} value={'{{'} 'name':
                'Tom' {'}}'}
                onChange={'{'}someFunction{'}'} style={'{{'}background:grey
                {'}}'} valid {'<FormField />'} {'</FormGroup>'}
              </p>
            </div>
          </div>
          <div className="card__detail">
            <div className="card__header">
              <h2>Description</h2>
            </div>
            <div className="card__content">
              <p>
                FormGroup components wrap a form element, keeping track of its
                current state, and can be configured to inform parent components
                when the state changes.
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
                    <td className="code">groupName: string</td>
                    <td>
                      Unique name by which to identify the FormGroup
                      <strong> Required</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="code">errors: object | boolean</td>
                    <td>
                      Sets errors on FormGroup: false if the group is valid or
                      an object with the error names as fields and any
                      additional info about the errors as the values. Default
                      value is false.
                    </td>
                  </tr>
                  <tr>
                    <td className="code">style: object</td>
                    <td>
                      Sets inline styling. Default value is an empty object.
                    </td>
                  </tr>
                  <tr>
                    <td className="code">value: object</td>
                    <td>
                      Sets the values for any nested FormFields. Default value
                      is empty object.
                    </td>
                  </tr>
                  <tr>
                    <td className="code">valid: boolean</td>
                    <td>
                      Manually sets whether the FormGroup is valid. Default
                      value is false;
                    </td>
                  </tr>
                  <tr>
                    <td className="code">
                      onBlur: function(formState: object)
                    </td>
                    <td>
                      <p>
                        Function called whenever an onBlur event is triggered
                        for any nested FormField. The function will
                        automatically be passed the FormGroup's current state.
                      </p>
                      <p>
                        By default, no function will be executed onBlur unless
                        one is passed as a prop.
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
                        for any nested FormField. The function will
                        automatically be passed the FormGroup's current state.
                      </p>
                      <p>
                        By default, no function will be executed onChange unless
                        one is passed as a prop.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="code">
                      onSubmit: function(formState: object)
                    </td>
                    <td>
                      <p>
                        Function called whenever an onSubmit event is triggered
                        for the form. The function will automatically be passed
                        the FormGroup's current state.
                      </p>
                      <p>
                        By default, no function will be executed onSubmit unless
                        one is passed as a prop.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="code">children: child elements</td>
                    <td>
                      Any children <Link to="/form-field">FormField</Link>{' '}
                      components or html elements to render.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default group;

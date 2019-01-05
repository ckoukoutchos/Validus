import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../../UI/footer/Footer';
import NavBar from '../../UI/navbar/NavBar';
import './Sugar.css';

const sugar = props => {
  return (
    <>
      <NavBar />
      <main>
        <section>
          <div className="card__well">
            <h1 className="title">FormSugar</h1>
            <p className="sub-title">
              Class providing shorthand methods for constructing
              {' <FormField>'} and {'<FormGroup>'} components
            </p>
          </div>

          <div className="card__detail">
            <div className="card__header">
              <h2>class FormSugar</h2>
            </div>
            <div className="card__content">
              <p className="code">
                static field([ (fieldName: string), (type: string), (value?:
                any), (formCheck?: FormCheck[]), (onChange: function) ]) :{' '}
                <Link to="/form-field">{'<FormField>'}</Link>
              </p>
              <p className="code">
                static group([ (groupName: string), (formFields:{' '}
                <Link to="/form-field">{'<FormField>'}</Link>[]), (onChange:
                function), (value?: any) ]) :{' '}
                <Link to="/form-group">{'<FormGroup>'}</Link>
              </p>
            </div>
          </div>

          <div className="card__detail">
            <div className="card__header">
              <h2>Description</h2>
            </div>
            <div className="card__content">
              <p>
                FormSugar is just what it sounds like: syntactic sugar for
                creating Forms.
              </p>
              <p>
                Instead of passing each field as a prop to the Form component,
                you can call either the <strong>field</strong> or
                <strong> group</strong> method of the className and pass it an
                array of the props.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="card__detail">
            <div className="card__header">
              <h2>field( )</h2>
              <p>
                Shorthand for creating a {'<FormField>'}. All other props for a
                {' <FormField>'} not included in the field method are set to the
                default value.
              </p>
            </div>
            <div className="card__content">
              <p className="code">
                static field([ (fieldName: string), (type: string), (value?:
                any), (formCheck?: FormCheck[]), (onChange: function) ]) :
                <Link to="/form-field">{'<FormField>'}</Link>
              </p>
              <hr />
              <p>
                <strong>Example:</strong>
              </p>
              <p className="code">
                FormSugar.field(['name', 'text', 'Sue', [FormCheck.required],
                someFunction]);
              </p>
              <p>
                <strong>Equivalent to:</strong>
              </p>
              <p className="code">
                {' <FormField'} fieldName={'{'}'name'{'}'} type={'{'}'text'
                {'}'} value={'{'}'Sue'{'}'}
                formCheck={'{'}[FormCheck.required]{'}'} onChange={'{'}
                someFunction{'}'} />
              </p>
            </div>
          </div>

          <div className="card__detail">
            <div className="card__header">
              <h2>group( )</h2>
              <p>
                Shorthand for creating a &ltFormGroup&gt. All other props for a
                &ltFormGroup&gt not included in the group method are set to the
                default value.
              </p>
            </div>
            <div className="card__content">
              <p className="code">
                static group([ (groupName: string), (formFields:
                <Link to="/form-field">{'<FormField>'}</Link>[]), (onChange:
                function), (value?: any) ]) :{' '}
                <Link to="/form-group">{'<FormGroup>'}</Link>
              </p>
              <hr />
              <strong>Example:</strong>
              <p className="code">
                FormSugar.group(['name', [{'<FormField>'}], someFunction, '']);
              </p>
              <p>
                <strong>Equivalent to:</strong>
              </p>
              <p className="code">
                {' <FormGroup'} groupName={'{'}'name'{'}'} onChange={'{'}
                someFunction{'}'}
                value={'{'}''{'}'}> {' <FormField />'} {' <FormGroup />'}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default sugar;

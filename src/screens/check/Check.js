import React from 'react';

import Footer from '../../UI/footer/Footer';
import NavBar from '../../UI/navbar/NavBar';
import './Check.css';

const check = props => {
  return (
    <>
      <NavBar />
      <main>
        <section>
          <div className="card__well">
            <h1 className="title">FormCheck</h1>
            <p className="sub-title">
              Class providing built-in validation functions for common use cases
            </p>
          </div>

          <div className="card__detail">
            <div className="card__header">
              <h2>class FormCheck</h2>
            </div>
            <div className="card__content">
              <p className="code">
                static email(value: string) : boolean | array
              </p>
              <p className="code">static max(max: number) : FormCheck</p>
              <p className="code">
                static maxLength(maxLength: number) : FormCheck
              </p>
              <p className="code">static min(min: number) : FormCheck</p>
              <p className="code">
                static minLength(minLength: number) : FormCheck
              </p>
              <p className="code">static regex(regex: RegExp) : FormCheck</p>
              <p className="code">
                static required(value: any) : boolean | array
              </p>
            </div>
          </div>

          <div className="card__detail">
            <div className="card__header">
              <h2>Description</h2>
            </div>
            <div className="card__content">
              <p>
                FormChecks are functions that run any time an onBlur or onChange
                event fires for a FormField to check the input's validity.
              </p>
              <p>
                They either return false, for no error, or an array containing
                the name of the error and any additional information that may be
                useful (e.g. the length of the input value).
              </p>
              <p>
                The FormCheck class provides a number of common validation
                checks, but it is also possible to
                <a href="#custom"> write your own</a> FormChecks.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="card__detail">
            <div className="card__header">
              <h2>email( )</h2>
              <p>Checks if value is in a valid email address format</p>
            </div>
            <div className="card__content">
              <p className="code">
                static email(value: string) : boolean | array
              </p>
              <hr />
              <p>
                <strong>Example:</strong>
              </p>
              <p className="code">
                {'<FormField'} formCheck={'{'}[FormCheck.email]{'}'} />
              </p>
            </div>
          </div>

          <div className="card__detail">
            <div className="card__header">
              <h2>max( )</h2>
              <p>Checks if value less than or equal to max</p>
            </div>
            <div className="card__content">
              <p className="code">static max(max: number) : FormCheck</p>
              <hr />
              <p>
                <strong>Example:</strong>
              </p>
              <p className="code">
                {'<FormField'} formCheck={'{'}[FormCheck.max(3)]{'}'} />
              </p>
            </div>
          </div>

          <div className="card__detail">
            <div className="card__header">
              <h2>maxLength( )</h2>
              <p>Checks if value's length is less than or equal to maxLength</p>
            </div>
            <div className="card__content">
              <p className="code">
                static maxLength(maxLength: number) : FormCheck
              </p>
              <hr />
              <p>
                <strong>Example:</strong>
              </p>
              <p className="code">
                {'<FormField'} formCheck={'{'}[FormCheck.maxLength(3)]{'}'} />
              </p>
            </div>
          </div>

          <div className="card__detail">
            <div className="card__header">
              <h2>min( )</h2>
              <p>Checks if value is greater than or equal to min</p>
            </div>
            <div className="card__content">
              <p className="code">static min(min: number) : FormCheck</p>
              <hr />
              <p>
                <strong>Example:</strong>
              </p>
              <p className="code">
                {'<FormField'} formCheck={'{'}[FormCheck.min(3)]{'}'} />
              </p>
            </div>
          </div>

          <div className="card__detail">
            <div className="card__header">
              <h2>minLength( )</h2>
              <p>
                Checks if value's length is greater than or equal to minLength
              </p>
            </div>
            <div className="card__content">
              <p className="code">
                static minLength(minLength: number) : FormCheck
              </p>
              <hr />
              <p>
                <strong>Example:</strong>
              </p>
              <p className="code">
                {'<FormField'} formCheck={'{'}[FormCheck.minLength(3)]{'}'} />
              </p>
            </div>
          </div>

          <div className="card__detail">
            <div className="card__header">
              <h2>regex( )</h2>
              <p>Checks if value passes regex.test()</p>
            </div>
            <div className="card__content">
              <p className="code">static regex(regex: RegExp) : FormCheck</p>
              <hr />
              <p>
                <strong>Example:</strong>
              </p>
              <p className="code">
                {'<FormField'} formCheck={'{'}[FormCheck.regex(new
                RegExp(/abc/))]
                {'}'} />
              </p>
            </div>
          </div>

          <div className="card__detail">
            <div className="card__header">
              <h2>required( )</h2>
              <p>Checks if any value other than whitespace exists</p>
            </div>
            <div className="card__content">
              <p className="code">
                static required(value: any) : boolean | array
              </p>
              <hr />
              <p>
                <strong>Example:</strong>
              </p>
              <p className="code">
                {'<FormField'} formCheck={'{'}[FormCheck.required]{'}'} />
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="card__detail">
            <div className="card__header" id="custom">
              <h2>Custom FormCheck Functions</h2>
              <p>Write your own FormCheck functions</p>
            </div>
            <div className="card__content">
              <p>
                The function must accept <strong>at least one argument</strong>:
                the input value that is automatically passed to the function
                when the FormCheck runs.
              </p>
              <p>
                The function should return <strong>false</strong> if the value
                passes the validator; otherwise it should return an
                <strong> array</strong> with the first value being a
                <strong> string</strong> for the name of the error and the
                second being whatever information about the error you want
                returned.
              </p>
              <hr />
              <p>
                <strong>Example</strong>
              </p>
              <p className="code">
                yourFormCheckFunc(inputValue) {'{'} return (inputValue > 10) ?
                false : ['tooSmall', true]{'}'}
              </p>
              <p>
                <strong>Example</strong>
              </p>
              <p className="code">
                yourFormCheckFunc(max) {'{'}{' '}
                {'return (inputValue) => inputValue < max ? '}
                false : ['tooBig', {'{'} max: max, actual: inputValue {'}'}]
                {'}'}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default check;

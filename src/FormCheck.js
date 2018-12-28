/*
 * Built-in FormCheck functions for FormFields
 */
export default class FormCheck {
  /**
   * @description checks if value is valid email address
   * @param {string} email string
   * @returns boolean
   */
  static email(value) {
    return /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/.test(
      value
    );
  }

  /**
   * @description checks if value is greater than or equal to max
   * @param {number} max number
   * @returns function
   */
  static max(max) {
    return value => (value <= max ? false : ['max', { max, actual: value }]);
  }

  /**
   * @description checks if value length is greater than or equal to maxLength
   * @param {number} maxLength
   * @returns function
   */
  static maxLength(maxLength) {
    return value =>
      value.length <= maxLength
        ? false
        : ['maxLength', { maxLength, actual: value.length }];
  }

  /**
   * @description checks if value is less than or equal to min
   * @param {number} min
   * @returns function
   */
  static min(min) {
    return value => (value >= min ? false : ['min', { min, actual: value }]);
  }

  /**
   * @description checks if value length is less than or equal to minLength
   * @param {number} minLength
   * @returns
   */
  static minLength(minLength) {
    return value =>
      value.length >= minLength
        ? false
        : ['minLength', { minLength, actual: value.length }];
  }

  /**
   * @description checks if value matches RegExp pattern
   * @param {RegExp} pattern RegExp
   * @returns function
   */
  static regex(regex) {
    return value => regex.test(value);
  }

  /**
   * @description checks if any value exists
   * @param {string} value string
   * @returns boolean
   */
  static required(value) {
    return value.trim().length > 0 ? false : ['required', true];
  }
}

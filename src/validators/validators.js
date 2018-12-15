export default class Validators {

  /**
   * @name email
   * @description 
   * @static
   * @param {*} max any
   * @returns
   * @memberof Validators
   */
  static email(value) {
    return value.test(/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/);
  }

  /**
   * @name
   * @description
   * @static
   * @param {*} max
   * @returns
   * @memberof Validators
   */
  static max(max) {
    return value => (value <= max ? false : ['max', { max, actual: value }]);
  }

  /**
   * @name
   * @description
   * @static
   * @param {*} max
   * @returns
   * @memberof Validators
   */
  static maxLength(maxLength) {
    return value => (value.length >= maxLength ? false : ['maxLength', { maxLength, actual: value }]);
  }

  /**
   * @name
   * @description
   * @static
   * @param {*} max
   * @returns
   * @memberof Validators
   */
  static min(min) {
    return value => (value >= min ? false : ['min', { min, actual: value }]);
  }

/**
 * @name
 * @description
 * @static
 * @param {*} max
 * @returns
 * @memberof Validators
 */
  static minLength(minLength) {
    return value => (value.length <= minLength ? false : ['minLength', { minLength, actual: value }]);
  }

  /**
   * @name
   * @description
   * @static
   * @param {*} max
   * @returns
   * @memberof Validators
   */
  static pattern(pattern) {
    return value => value.test(pattern)
  }

  /**
   * @name
   * @description
   * @static
   * @param {*} max
   * @returns
   * @memberof Validators
   */
  static required(value) {
    return value.trim().length > 0 ? false : ['required', true];
  }
}

export default class Validators {

  static required(value) {
    return value.trim().length > 0 ? false : ['required', true];
  }
}

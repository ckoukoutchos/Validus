import FormCheck from './FormCheck';

describe('FormCheck', () => {
  describe('email', () => {
    it('should return false if value is valid email format', () => {
      expect(FormCheck.email('asdf@asdf.com')).toBe(false);
    });

    it('should return an error array with "email" as the 1st item if invalid email format', () => {
      const [error, value] = FormCheck.email('asdf');
      expect(error).toEqual('email');
      expect(value).toBe(true);
    });
  });

  describe('max', () => {
    it('should return false if value is lt or = to max', () => {
      expect(FormCheck.max(2)(2)).toBe(false);
    });

    it('should return an error array with "max" as the 1st item if gt max', () => {
      const [error] = FormCheck.max(2)(3);
      expect(error).toEqual('max');
    });

    it('should return error with max/actual as 2nd item if gt max', () => {
      const [, error] = FormCheck.max(2)(3);
      expect(error.max).toEqual(2);
      expect(error.actual).toEqual(3);
    });
  });

  describe('maxLength', () => {
    it('should false if value length is lt or = to maxLength', () => {
      expect(FormCheck.maxLength(2)('hi')).toBe(false);
    });

    it('should return an error array with "maxLength" as the 1st item if gt maxLength', () => {
      const [error] = FormCheck.maxLength(2)('hii');
      expect(error).toEqual('maxLength');
    });

    it('should return error with maxLength/actual as 2nd item if gt maxLength', () => {
      const [, error] = FormCheck.maxLength(2)('hii');
      expect(error.maxLength).toEqual(2);
      expect(error.actual).toEqual(3);
    });
  });

  describe('min', () => {
    it('should return false if value is gt or = to min', () => {
      expect(FormCheck.min(2)(2)).toBe(false);
    });

    it('should return an error array with "min" as the 1st item if lt min', () => {
      const [error] = FormCheck.min(2)(1);
      expect(error).toEqual('min');
    });

    it('should return error with min/actual as 2nd item if lt min', () => {
      const [, error] = FormCheck.min(2)(1);
      expect(error.min).toEqual(2);
      expect(error.actual).toEqual(1);
    });
  });

  describe('minLength', () => {
    it('should false if value length is gt or = to minLength', () => {
      expect(FormCheck.minLength(2)('hi')).toBe(false);
    });

    it('should return an error array with "minLength" as the 1st item if lt minLength', () => {
      const [error] = FormCheck.minLength(2)('h');
      expect(error).toEqual('minLength');
    });

    it('should return error with minLength/actual as 2nd item if lt minLength', () => {
      const [, error] = FormCheck.minLength(2)('h');
      expect(error.minLength).toEqual(2);
      expect(error.actual).toEqual(1);
    });
  });

  describe('regex', () => {
    it('should return false if value passes regex test', () => {
      const regex = FormCheck.regex(RegExp('foo'));
      expect(regex('foobaz')).toBe(false);
    });

    it('should return an error array with "regex" as the 1st item if value doesnt pass regex', () => {
      const regex = FormCheck.regex(RegExp('foo'));
      const [error, value] = regex('baz');
      expect(error).toEqual('regex');
      expect(value).toBe(true);
    });
  });

  describe('required', () => {
    it('should return false if any value is present', () => {
      expect(FormCheck.required('hi')).toBe(false);
    });

    it('should return an error array with "required" as the 1st item if no value is present', () => {
      const [error] = FormCheck.required('');
      expect(error).toEqual('required');
    });

    it('should return error with true as 2nd item if only whitespace is present', () => {
      const [, error] = FormCheck.required('  ');
      expect(error).toBe(true);
    });
  });
});

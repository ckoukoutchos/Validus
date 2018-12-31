import FormCheck from './FormCheck';

describe('FormCheck', () => {
  describe('max', () => {
    it('should return false if value is lt or = to max', () => {
      const actual = FormCheck.max(2)(2);
      expect(actual).toBe(false);
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
      const actual = F;
    });
  });

  describe('min', () => {
    it('should return false if value is gt or = to min', () => {
      const actual = FormCheck.min(2)(2);
      expect(actual).toBe(false);
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
});

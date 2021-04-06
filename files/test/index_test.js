var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('will test if 5! equals 120', () => {
      // setup
      const expected = 120;
      // exercise
      const result = Calculate.factorial(5);

      // verify
      assert.equal(result, expected);
    });

    it('will test if 3! equals 6', () => {
      // setup
      const expected = 6;
      // exercise
      const result = Calculate.factorial(3);

      // verify
      assert.equal(result, expected);
    });

     it('will test if 0! equals 1', () => {
      // setup
      const expected = 1;
      // exercise
      const result = Calculate.factorial(0);

      // verify
      assert.equal(result, expected);
    });
  });
});
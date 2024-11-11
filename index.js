export default class Validator {
  constructor(props = {}) {
    this.options = { ...props };
  }

  postalCode() {
    this.options.startsWith = 'ZIP';
    return this;
  }

  setPostalCodeLengthConstraint(min, max = Infinity) {
    this.options.minLength = min;
    this.options.maxLength = max;
    return this;
  }

  isCode(str) {
    return `${str}`.startsWith(this.options.startsWith);
  }

  isLengthValid(str) {
    if (this.options.minLength === undefined) {
      return true;
    }
    return `${str}`.split('_').at(1).length >= this.options.minLength
            && `${str}`.split('_').at(1).length <= this.options.maxLength;
  }

  isValid(str) {
    return this.isCode(str) && this.isLengthValid(str);
  }
}

const v = new Validator();

const postalCodeSchema2 = v.postalCode().setPostalCodeLengthConstraint(7);
console.log(postalCodeSchema2);
console.log(postalCodeSchema2.isValid('ZIP_6789056889')); // true
console.log(postalCodeSchema2.isValid('ZIP_54321'));

// console.log(postalCodeSchema.isValid('ZI_2342'));

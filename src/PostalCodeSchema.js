class PostalValidator {
  setPostalCodeLengthConstraint(min, max = Infinity) {
    this.minLength = min;
    this.maxLength = max;
    return this;
  }

  isCode(str) {
    return `${str}`.startsWith('ZIP');
  }

  isLengthValid(str) {
    if (!this.minLength) return true;
    const [, code] = str.split('_');
    return code.length >= this.minLength && code.length <= this.maxLength;
  }

  isValid(str) {
    return this.isCode(str) && this.isLengthValid(str);
  }
}

export default PostalValidator;

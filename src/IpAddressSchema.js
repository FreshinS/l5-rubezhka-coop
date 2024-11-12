class IpAddressValidator {
  ipAddressValues(min, max = Infinity) {
    this.minLength = min;
    this.maxLength = max;
    return this;
  }

  isLengthValid(str) {
    if (!this.minLength) return true;
    const ip = str.slice(3);
    return ip.length >= this.minLength && ip.length <= this.maxLength;
  }

  isIp(str) {
    // return `${str}`.startsWith('27');
    return `${str}`.startsWith('27') && `${str}`.split('.').length === 4;
  }

  isValid(str) {
    return this.isIp(str) && this.isLengthValid(str);
  }
}

export default IpAddressValidator;

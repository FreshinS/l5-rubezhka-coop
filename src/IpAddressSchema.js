class IpAddressValidator {
  ipAddressValues() {
    this.valuesCheck = true;
    return this;
  }

  isValuesValid(str) {
    if (!this.valuesCheck) return true;
    const ip = str.split('.');
    if (ip.length !== 4) return false ;
    const filteredIp = ip.filter((digit) => digit >= 0 && digit <= 255);
    return filteredIp.length === 4;
  }

  isIp(str) {
    // return `${str}`.startsWith('27');
    return `${str}`.startsWith('27') && `${str}`.split('.').length === 4;
  }

  isValid(str) {
    return this.isIp(str) && this.isValuesValid(str);
  }
}

export default IpAddressValidator;

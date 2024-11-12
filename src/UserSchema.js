class UserValidator {
  shape(obj) {
    this.postalValidator = obj.postalCode;
    this.ipValidator = obj.ipAddress;
    return this;
  }

  isValid(obj) {
    return this.postalValidator.isValid(obj.postalCode) && this.ipValidator.isValid(obj.ipAddress);
  }
}

export default UserValidator;

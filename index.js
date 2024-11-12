import PostalValidator from './src/PostalCodeSchema.js';
import IpAddressValidator from './src/IpAddressSchema.js';
import UserValidator from './src/UserSchema.js';

class Validator {
  postalCode() {
    return new PostalValidator();
  }

  ipAddress() {
    return new IpAddressValidator();
  }

  user() {
    return new UserValidator();
  }
}

export default Validator;

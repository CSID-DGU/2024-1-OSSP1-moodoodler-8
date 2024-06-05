const REGEX = Object.freeze({
  userIdPattern: /^(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9]{4,20}$/,
  passwordPattern: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
});

export default REGEX;

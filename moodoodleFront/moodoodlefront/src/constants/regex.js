const REGEX = Object.freeze({
  userIdPattern: /^(?=.*[a-z])(?=.*[0-9])[a-z0-9]{4,10}$/,
  passwordPattern: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
});

export default REGEX;

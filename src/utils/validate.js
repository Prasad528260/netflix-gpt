import validator from "validator";

export const validateSignup = (email, password,name) => {
  if(!name){
    return 'Name is not valid'
  }
  if (!validator.isEmail(email)) {
    return "Email is not valid"
  }
  if (!validator.isStrongPassword(password)) {
     return "password is not valid"
  }

  return null;
};
export const validateSignin = (email, password) => {

  if (!validator.isEmail(email)) {
    return "Email is not valid"
  }
  if (!validator.isStrongPassword(password)) {
     return "password is not valid"
  }

  return null;
};


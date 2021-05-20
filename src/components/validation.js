const validation = (values) => {
  let errors = {};

  if(!values.fullname) {
    errors.fullname = 'Name is required.'
  } else if(!/^[a-zA-Z\s]{1,120}$/.test(values.fullname)) {
    errors.fullname = 'Name is invalid.'
  }
  if(!values.email) {
    errors.email = 'Email is required.'
  } else if(!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email is invalid.'
  }
  if(!values.password) {
    errors.password = 'Password is required.'
  } else if(values.password.length < 8) {
    errors.password = 'Password field should contain at least 8 symbols.'
  }

  return errors;
};

export default validation;

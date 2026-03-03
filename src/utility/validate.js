const checkValidation = (data, mode) => {
  const { email, pwd, crn, fname } = data;

  const _emailRegex = /^\S+@\S+\.\S+$/;
  const _pwdRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,}$/;
  const _crnRegex = /^\d{8}$/;
  const _fnameRegex = /^[A-Za-z]{2,}\s[A-Za-z]{2,}$/;
  if (mode === "Login") {
    if (!_emailRegex.test(email)) {
      return "Email not valid";
    }
  }

  if (mode === "SignUp") {
    if (!_fnameRegex.test(fname)) {
      return "Please Enter your name correctly";
    }
    if (!_crnRegex.test(crn)) {
      return "Enter your 8 digit CRN number";
    }
    if (!_emailRegex.test(email)) {
      return "Email not valid";
    }
    if (!_pwdRegex.test(pwd)) {
      return "Pasword must contains 8 characters, atleast 1 uppercase,1 lowercase,1 number,1 special-char";
    }
  }
  return null;
};

export default checkValidation;

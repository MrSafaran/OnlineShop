export const validate = (type, data) => {
  const error = {};

  if (!data.username.trim()) {
    error.username = "نام کاربری الزامیست!";
  } else {
    delete error.username;
  }

  if (!data.password) {
    error.password = "رمزعبور الزامیست!";
  } else if (data.password.length < 6) {
    error.password = "رمزعبور باید حداقل شامل 6 کاراکتر باشد!";
  } else {
    delete error.password;
  }

  // additional validation for Signup.
  if (type === "Signup") {
    if (!data.email) {
      error.email = "ایمیل الزامیست!";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      error.email = "ایمیل وارد شده نامعتبر است!";
    } else {
      delete error.email;
    }

    if (!data.confirmPassword) {
      error.confirmPassword = "تایید رمزعبور الزامیست!";
    } else if (data.confirmPassword !== data.password) {
      error.confirmPassword = "اطلاعات وارد شده با رمزعبور مطابقت ندارد!";
    } else {
      delete error.checkPolicy;
    }

    if (data.checkPolicy) {
      delete error.checkPolicy;
    } else {
      error.checkPolicy = "پذیرش شرایط الزامیست!";
    }
  }

  return error;
};

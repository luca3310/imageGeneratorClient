export default function checkPassword(
  password: string,
  setPasswordError: (passwordError: string) => void,
): boolean {
  const firstLetterUppercase = /^[A-Z]/;
  if (password.length <= 5) {
    setPasswordError("password needs to be longer than 5");
    return false;
  } else if (password.length >= 12) {
    setPasswordError("password needs to be shorter than 13");
    return false;
  } else if (!firstLetterUppercase.test(password)) {
    setPasswordError("Password must start with an uppercase letter.");
    return false;
  } else {
    setPasswordError("");
    return true;
  }
}

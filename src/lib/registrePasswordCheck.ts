export default function checkPassword(
  password: string,
  setPasswordError: (passwordError: string) => void,
) {
  if (password.length <= 8) {
    setPasswordError("password needs to be longer than 7");
    return false;
  } else {
    setPasswordError("");
    return true;
  }
}

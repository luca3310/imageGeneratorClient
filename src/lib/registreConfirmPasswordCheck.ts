export default function checkConfirmPassword(
  password: string,
  confirmPassword: string,
  setConfirmPasswordError: (confirmPasswordError: string) => void,
) {
  if (password !== confirmPassword) {
    setConfirmPasswordError("needs to be the same as password");
    return false;
  } else {
    setConfirmPasswordError("");
    return true;
  }
}

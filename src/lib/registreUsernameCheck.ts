export default function checkUsername(
  username: string,
  setUsernameError: (usernameError: string) => void,
): boolean {
  if (username.length <= 3) {
    setUsernameError("username needs to be longer than 3");
    return false;
  } else {
    setUsernameError("");
    return true;
  }
}

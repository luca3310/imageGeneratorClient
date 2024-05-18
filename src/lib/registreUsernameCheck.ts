export default function checkUsername(
  username: string,
  setUsernameError: (usernameError: string) => void,
): boolean {
  const specialCharacters = /[^a-zA-Z0-9]/;
  if (username.length <= 3) {
    setUsernameError("username needs to be longer than 3");
    return false;
  } else if (username.length >= 14) {
    setUsernameError("username needs to be shorter than 14");
    return false;
  } else if (specialCharacters.test(username)) {
    setUsernameError("Username cannot contain special characters.");
    return false;
  } else {
    setUsernameError("");
    return true;
  }
}

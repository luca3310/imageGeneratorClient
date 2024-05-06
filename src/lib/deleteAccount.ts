import notify from "./notify";

export default async function deleteAccount(user: Parse.User, navigate: any) {
  try {
    await user.destroy();
    navigate("/");
  } catch (error: any) {
    console.error("Error while deleting user", error);
    notify(error.message);
  }
}

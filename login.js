import { users } from "users.js";

const login = () => {
  //e.preventDefault();

  const usernameInput = document.getElementById("loginEmail");
  const passwoedInput = document.getElementById("loginPassword");

  console.log(usernameInput, passwoedInput);
};

document.getElementById("signInButton").addEventListener("click", login);

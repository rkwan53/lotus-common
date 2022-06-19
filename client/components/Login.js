import React from 'react';

export default function Login() {
  return (
    <div id="login">
      <h1>Login page</h1>
      <label for="uname">
        <b>Username</b>
      </label>
      <input type="text" placeholder="Enter Username" name="uname" required />

      <label for="psw">
        <b>Password</b>
      </label>
      <input type="password" placeholder="Enter Password" name="psw" required />

      <button type="submit">Login</button>
    </div>
  );
}

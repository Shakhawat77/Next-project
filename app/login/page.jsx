"use client";

import { signIn } from "next-auth/react";

export default function Login() {
  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/dashboard",
    });
  };

  return (
    <form onSubmit={handleLogin}>
      <input name="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

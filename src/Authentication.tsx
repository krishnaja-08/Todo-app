import { useState } from "react";
import { auth } from "./firebase";
import {
  Form,
  Heading,
  Input,
  Label,
  SignInButton,
  SignUpButton,
} from "./StyledComponents";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function Authentication() {
  function signIn() {
    signInWithEmailAndPassword(auth, user.email, user.password).catch((e) => {
      alert(e.message);
      setUser({ email: "", password: "" });
    });
  }
  function signUp() {
    createUserWithEmailAndPassword(auth, user.email, user.password).catch(
      (e) => {
        alert(e.message);
        setUser({ email: "", password: "" });
      }
    );
  }
  const [user, setUser] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  return (
    <>
      <Heading>Login/Sign up</Heading>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          signIn();
        }}
      >
        <Label>Email</Label>
        <Input
          type="email"
          required
          value={user.email}
          onChange={(e) =>
            setUser((user) => ({ ...user, email: e.target.value }))
          }
        />

        <Label>Password</Label>
        <Input
          required
          type="password"
          value={user.password}
          onChange={(e) =>
            setUser((user) => ({ ...user, password: e.target.value }))
          }
        />
        <input type="submit" hidden />
        <SignInButton type="button" onClick={signIn}>
          Sign In
        </SignInButton>
        <SignUpButton type="button" onClick={signUp}>
          Sign Up
        </SignUpButton>
      </Form>
    </>
  );
}

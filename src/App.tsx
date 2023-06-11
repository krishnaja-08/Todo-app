import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../src/firebase";
import Authentication from "./Authentication";
import {
  Container,
  Heading,
  HeadingRow,
  SignOutButton,
} from "./StyledComponents";
import { useEffect, useState } from "react";
import Todos from "./Todos";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(user ? true : false);
    });
  }, []);
  function signOut() {
    auth.signOut();
  }
  if (!isLoggedIn)
    return (
      <Container>
        <Authentication />
      </Container>
    );
  return (
    <Container>
      <HeadingRow>
        <Heading>To-Dos</Heading>
        <SignOutButton onClick={signOut}>Sign Out</SignOutButton>
      </HeadingRow>
      <Todos />
    </Container>
  );
}

export default App;

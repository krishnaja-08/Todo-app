import { styled } from "styled-components";

export const Container = styled.div`
  margin: 20px 10%;
  height: full;
  width: full;
`;
export const Heading = styled.h1`
  font-size: 2em;
`;
export const Subtitle = styled.h2`
  font-size: 1.15rem;
  font-weight: 600;
`;
export const Form = styled.form`
  display: flex;
  gap: 6px;
  flex-direction: column;
  width: 40rem;
  margin: 5rem auto 0;
`;
export const SignInButton = styled.button`
  background: #5086d2;
  color: white;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
`;
export const SignUpButton = styled.button`
  background: #10b981;
  color: white;
  padding: 0.5rem 0.25rem;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
`;
export const Label = styled.label`
  font-weight: bold;
  font-size: 1.25rem;
`;
export const Input = styled.input`
  font-size: 1.1rem;
  padding: 0.2rem 0.4rem;
  border-radius: 5px;
`;
export const AddTodoButton = styled.button`
  background: green;
  color: white;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
`;
export const AddTodoRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;
export const TodoRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem 0;
  border: 2px solid blue;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  gap: 1rem;
`;

export const Todo = styled.h3<{ $completed: boolean }>`
  font-weight: bold;
  font-size: 1.25rem;
  color: ${(props) => (props.$completed ? "#bbbbbb" : "black")};
  text-decoration: ${(props) => (props.$completed ? "line-through" : "none")};
`;
export const TodoIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-items: center;
`;
export const TodoButton = styled.button`
  background: none;
  cursor: pointer;
  color: transparent;
  border: none;
`;
export const TodoButtonImage = styled.img`
  width: 1rem;
  height: 1rem;
`;

export const HeadingRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;
  justify-items: center;
`;

export const SignOutButton = styled.button`
  font-weight: bold;
  color: white;
  padding: 0.5rem;
  border: none;
  border-radius: 10px;
  background: red;
`;

import { get, ref, set } from "firebase/database";
import { auth, db } from "./firebase";
import { useEffect, useState } from "react";
import { Todo } from "./Types/Todos";
import AddNewTodo from "./AddNewTodo";
import {
  TodoButtonImage,
  TodoIcons,
  TodoButton,
  Todo as TodoItem,
  TodoRow,
} from "./StyledComponents";
export default function Todos() {
  const [todos, setTodos] = useState<Todo[] | undefined>([]);
  useEffect(() => {
    if (!todos)
      get(ref(db, "todos/" + auth.currentUser?.uid))
        .then((snapshot) => snapshot.val())
        .then((data) => {
          if (data === null)
            auth.currentUser &&
              set(ref(db, "todos/" + auth.currentUser?.uid), []);
          else setTodos(data);
        });
    else
      auth.currentUser && set(ref(db, "todos/" + auth.currentUser?.uid), todos);
    console.log(todos);
  }, [todos]);
  function toggleState(id: string) {
    setTodos(
      (todos) =>
        todos && [
          ...todos.map((todo) => {
            if (todo.id === id) return { ...todo, completed: !todo.completed };
            else return todo;
          }),
        ]
    );
  }
  function deleteTodo(id: string) {
    setTodos((todos) => todos?.filter((todo) => todo.id !== id));
  }
  return (
    <>
      <AddNewTodo setTodos={setTodos} />
      {todos
        ?.sort((todo1, todo2) =>
          todo1.added < todo2.added ? 1 : todo1.added > todo2.added ? -1 : 0
        )
        .map((todo) => (
          <TodoRow key={todo.id}>
            <TodoItem $completed={todo.completed}>{todo.title}</TodoItem>
            <TodoIcons>
              <TodoButton onClick={() => toggleState(todo.id)}>
                <TodoButtonImage
                  src={!todo.completed ? "/check.svg" : "/xmark.svg"}
                />
              </TodoButton>
              <TodoButton onClick={() => deleteTodo(todo.id)}>
                <TodoButtonImage src="/trash.svg" />
              </TodoButton>
            </TodoIcons>
          </TodoRow>
        ))}
    </>
  );
}

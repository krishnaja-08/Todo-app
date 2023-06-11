import { Dispatch, SetStateAction, useState } from "react";
import { Todo } from "./Types/Todos";
import { AddTodoButton, AddTodoRow, Input, Subtitle } from "./StyledComponents";

export default function AddNewTodo({
  setTodos,
}: {
  setTodos: Dispatch<SetStateAction<Todo[] | undefined>>;
}) {
  const [newTodo, setNewTodo] = useState("");
  return (
    <>
      <Subtitle>Add New Todo</Subtitle>
      <AddTodoRow>
        <Input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <AddTodoButton
          onClick={() => {
            setTodos((todos) => [
              {
                id: crypto.randomUUID(),
                added: new Date().toISOString(),
                title: newTodo,
                completed: false,
              },
              ...(todos || []),
            ]);
            setNewTodo("");
          }}
        >
          + Add New Todo
        </AddTodoButton>
      </AddTodoRow>
    </>
  );
}

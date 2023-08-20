import React from "react";
import Stack from "@mui/material/Stack";
import { AppContext } from "../context/AppContext";
import Todo from "./Todos";

export default function TodoList() {
  const { todos } = React.useContext(AppContext);

  return (
    <ul className="todo-list">
      <Stack spacing={2} direction="column-reverse">
        {todos.map((item, i) => (
          <li key={i}>
            <Todo index={i} item={item} />
          </li>
        ))}
      </Stack>
    </ul>
  );
}

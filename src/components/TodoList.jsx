import React from "react";
import Stack from "@mui/material/Stack";
import { AppContext } from "../context/AppContext";
import Todo from "./Todos";

export default function TodoList() {
  const { todos } = React.useContext(AppContext);

  return (
    <ul className="todo-list">
      <Stack spacing={2} direction="column">
        {todos.map((obj, index) => (
          <Todo checked={obj.isCompleted} index={index} key={obj.id} {...obj} />
        ))}
      </Stack>
    </ul>
  );
}

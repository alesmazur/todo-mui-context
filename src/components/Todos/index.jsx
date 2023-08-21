import React from "react";
import Checkbox from "@mui/material/Checkbox";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { AppContext } from "../../context/AppContext";

export default function Todos({ text, id, isCompleted, index }) {
  const { deleteTodoHandler } = React.useContext(AppContext);
  const [done, setDone] = React.useState(isCompleted);
  const checkBoxHandler = () => {
    setDone(!done);
  };
  const deleteTodo = (id) => {
    deleteTodoHandler(id);
  };

  return (
    <div className="todo-item">
      <div className={done ? "todo done" : "todo "}>
        <div className="todo-text">
          <div>{index + 1}.</div>
          <div>{text}</div>
        </div>
        {done && (
          <HighlightOffIcon
            style={{ cursor: "pointer" }}
            onClick={() => deleteTodo(id)}
            className="delete-icon"
          />
        )}
      </div>
      <div className="progress">
        <Checkbox onClick={checkBoxHandler} />
      </div>
    </div>
  );
}

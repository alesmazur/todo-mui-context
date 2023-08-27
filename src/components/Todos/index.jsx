import React from "react";
import Checkbox from "@mui/material/Checkbox";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import EditIcon from "@mui/icons-material/Edit";
import { AppContext } from "../../context/AppContext";

export default function Todos({ text, id,  index }) {
  const { deleteTodoHandler,  checkBoxHandler } =
    React.useContext(AppContext);
  const [done, setDone] = React.useState(false);
  const checkBoxToggle = (i) => {
    setDone(!done);
    checkBoxHandler(i);
  };
  const deleteTodo = (i) => {
    deleteTodoHandler(i);
  };

  return (
    <div className="todo-item">
      <div className={done ? "todo done" : "todo "}>
        <div className="todo-text">
          <div>{index + 1}.</div>
          <div>{text}</div>
        </div>

        {done ? (
          <ClearIcon
            style={{ cursor: "pointer" }}
            onClick={() => deleteTodo(id)}
            className="delete-icon"
          />
        ) : (
          <EditIcon
            onClick={() => {
              onEditHandler(id);
            }}
          />
        )}
      </div>
      <div className="progress">
        <Checkbox
          onClick={() => checkBoxToggle(id)}
          color="success"
          size="medium"
          checkedIcon={<TaskAltIcon />}
          icon={<CheckIcon />}
        />
      </div>
    </div>
  );
}

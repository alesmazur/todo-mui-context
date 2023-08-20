import React from "react";
import Checkbox from "@mui/material/Checkbox";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { AppContext } from "../../context/AppContext";

export default function Todos({ item, index }) {
  const { deleteTodoHandler } = React.useContext(AppContext);

  const [done, setDone] = React.useState(false);
  const checkBoxHandler = () => {
    setDone(!done);
  };

  return (
    <div className="todo-item">
      <div className={!done ? "todo" : "todo done"}>
        <div className="todo-text">
          <div>{index + 1}.</div>
          <div>{item}</div>
        </div>
        {done && (
          <HighlightOffIcon
            style={{ cursor: "pointer" }}
            onClick={() => deleteTodoHandler(index)}
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

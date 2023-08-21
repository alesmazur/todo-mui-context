import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from "uuid";
import TextField from "@mui/material/TextField";
import { AppContext } from "../../context/AppContext";
import styles from "./InputForm.module.scss";

export default function InputForm() {
  const { todos, setTodos, inputText, setInputText } =
    React.useContext(AppContext);

  const onClickAddHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    };
    console.log(newTodo);
    if (text) {
      setTodos([...todos, newTodo]);
      setInputText("");
    }
  };

  React.useEffect(() => {
    const enterPressHandler = (event) => {
      if (event.key === "Enter") {
        onClickAddHandler(inputText);
      }
    };
    document.addEventListener("keydown", enterPressHandler);

    return () => {
      document.removeEventListener("keydown", enterPressHandler);
    };
  }, [inputText]);

  return (
    <Stack className={styles.root} spacing={2} direction="row">
      <TextField
        className="input"
        id="outlined-basic"
        label="Todo"
        variant="outlined"
        type="search"
        placeholder="add new todo ..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <Button variant="contained" onClick={() => onClickAddHandler(inputText)}>
        Add
      </Button>
    </Stack>
  );
}

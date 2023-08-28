import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import "./App.scss";
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";
import { AppContext } from "./context/AppContext";
import { db } from "./firebase";

function App() {
  const [todos, setTodos] = React.useState(() => {
    const localData = localStorage.getItem("todos");
    return localData ? JSON.parse(localData) : [];
  });

  console.log(todos);
  const [inputText, setInputText] = React.useState("");
  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

  const deleteTodoHandler = (index) => {
    setTodos(
      todos.filter((obj) => {
        return obj.id !== index;
      })
    );
  };

  const clearAllHandler = () => {
    if (window.confirm("Delete all todos?")) {
      setTodos([]);
    }
  };

  const checkBoxHandler = (index) => {
    setTodos(
      todos.map((obj) => {
        return obj.id === index
          ? { ...obj, isCompleted: !obj.isCompleted }
          : { ...obj };
      })
    );
  };

  const editHandler = (index) => {
    const newText = prompt(
      "Edit todo",
      `${todos.filter((todo) => todo.id === index)[0].text}`
    );
    newText &&
      setTodos(
        todos.map((obj) =>
          obj.id === index ? { ...obj, text: newText } : { ...obj }
        )
      );
  };
  // local storage
  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <AppContext.Provider
        value={{
          todos,
          setTodos,
          inputText,
          setInputText,
          deleteTodoHandler,
          checkBoxHandler,
          editHandler,
        }}
      >
        <div className="App">
          <header className="App-header">
            <InputForm />
          </header>
          <main>
            <Stack spacing={4} direction="column">
              {!todos.length ? <div>Nothing to do ...</div> : <TodoList />}
            </Stack>
          </main>
          <footer className="App-footer">
            <div
              id="buttons"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {todos.length ? (
                <Button
                  startIcon={<DeleteIcon />}
                  variant="outlined"
                  onClick={clearAllHandler}
                >
                  Clear All
                </Button>
              ) : null}
              {todos.filter((item) => item.isCompleted).length ? (
                <Button
                  style={{ marginLeft: "5px" }}
                  variant="outlined"
                  onClick={() =>
                    setTodos(todos.filter((item) => !item.isCompleted))
                  }
                >
                  Clear done{" "}
                  <span
                    style={{
                      backgroundColor: "transparent",
                      marginLeft: "5px",
                      border: "1px solid green",
                      borderRadius: "100%",
                      width: "25px",
                      height: "25px",
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    {completedTodosCount}
                  </span>
                </Button>
              ) : null}
            </div>

            <div
              style={{
                opacity: 0.5,
                fontStyle: "italic",
                color: "green",
                marginTop: "15px",
                fontSize: ".7rem",
              }}
            >
              dev:
              <Button target="blank" href="https://github.com/alesmazur  ">
                Ales Mazur
              </Button>
            </div>
          </footer>
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;

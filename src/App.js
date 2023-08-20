import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import "./App.scss";
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";
import { AppContext } from "./context/AppContext";

function App() {
  const [todos, setTodos] = React.useState([]);
  const [inputText, setInputText] = React.useState("");
  const deleteTodoHandler = (index) => {
    setTodos(
      todos.filter((item, id) => {
        return id !== index;
      })
    );
  };

  return (
    <>
      <AppContext.Provider
        value={{ todos, setTodos, inputText, setInputText, deleteTodoHandler }}
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
            {todos.length ? (
              <Button
                startIcon={<DeleteIcon />}
                variant="outlined"
                onClick={() => setTodos([])}
              >
                Clear All
              </Button>
            ) : null}

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

// Make a container that has a form, in that form you use an mui grid (ver 2) create a textfield and a button inside that grid
//if youre done this create a stateful variable for todoValue
// this frameworklevel import
import { useState } from "react";

import { Container } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

// import our own list
import ListOfTodos from '/pages/components/ListOfTodos';
import NewTodoForm from '/pages/components/NewTodoForm';

export default function Home() {

const SAMPLE_TODOS = [
  "gripe brightspace",
  "annoy students aboot events",
  "not make typos, just learning moments",
  "watch canada beat the crap out of sweden"
]

// take a look at Mui doc
//I want you to create a list in the jsx
//in grid size 12 (a row)
//using the sample todos above

  // create a stateful variable, todoValue
//  const [todoValue, setTodoValue] = React.useState("Todo")   i was almost right

const [todoList, setTodoList] = useState(SAMPLE_TODOS)

//i added the textfield with a value, the problem with that is it never changes, it always the same

const deleteTodoItem = (index) => {
  console.log("index", index)
  //i want to create a temp array
  //i tryed to do this all in one line but it was messing up...
  let tempTodoList = [...todoList]
  //i want you to splice it
  //i want you to set the state
  tempTodoList.splice(index, 1)
  setTodoList(tempTodoList)
}
  return (
    <div>
      <Container maxWidth="lg" component={"main"}>

        {/* We're going to hook into this shortly */}
        <NewTodoForm 
          todoList={todoList}
          setTodoList={setTodoList}
        />
        <ListOfTodos 
          todoList={todoList}
          deleteToDoItem={deleteTodoItem}
        />
      </Container>
    </div>
  );
}

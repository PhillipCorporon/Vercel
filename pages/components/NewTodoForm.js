//we're going to take in the entire form.
//the text field, we're going to intialize state to this compontent for the text field. It doesnt need to be shared between components
//we're going to pass in todolist and todoValiue

import { useState } from "react"

import Grid2 from "@mui/material/Grid2"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"

export default function NewTodoForm(
    {todoList, setTodoList}
) {

    const [todoValue, setTodoValue] = useState("")    //the import we did above was just importing the useState directly

    const updateTodoValue = (event) => {
        // the event is a react event object
        // docs: somewhere
        setTodoValue(event.target.value)
        // and you can see the stateful value update
        // in react dev tools when you click the home compontent
      }
    
    const handleForm = (event) => {
        //prevent the default action
        event.preventDefault()
        console.log(`value of todoValue is ${todoValue}`)
      
        //Adding to the TodoList
        //below is what i did to answer, note this only adds to the end, you would want it to 
        //add at the start
      
        let addToList = todoList
        addToList.push(todoValue)
      
        // easier to do this, need to use the spread functionality
        // let addToList = [todoValue, ...todoList]
      
        // even better would likely be setToDoList([todoValue, ...todoList])
        // could shorten it all down to one line of code
        setTodoList(addToList)
      
        //we're going to reset the todoValue
        setTodoValue("")
      }

      
    return (
        <form
        onSubmit={handleForm}
        >
        <Grid2 container spacing={2} sx={{
          mt: 8
        }}>
            <Grid2 size={10}>
            {/* This will be for input, make it controller that i updates the stateful value*/}
              <TextField 
              id="new-todo-input" 
              label="Todo List" 
              variant="outlined" 
              fullWidth
              value={todoValue}
              onChange={updateTodoValue}>

              </TextField>
            </Grid2>

            <Grid2 size={2}>
              <Button 
              variant="contained" 
              size="large" 
              type="submit">
                Create
              </Button>
            </Grid2>
            <Grid2 size={12}>
              {/* We will loop through our todos */}
              
            </Grid2>
          </Grid2>
        </form>
    )
}
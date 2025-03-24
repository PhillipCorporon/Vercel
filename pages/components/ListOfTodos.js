// put the todos list jsx in this component

//What are we going to need?
// - todoList (to loop over)
// - deleteToDoItem

import { Fragment } from "react"

import { Divider, IconButton, List, ListItem, ListItemText } from "@mui/material"

import DeleteIcon from '@mui/icons-material/Delete'

export default function ListOfTodos({todoList, deleteToDoItem})
{
    return (
    <List>
        <Divider/>
          {todoList.map((todo, index) =>{
          //return a single jsx node
          //a fragment is a special jsx node
          //that doesnt add any html
          //normally you can use <> jsx
          return <Fragment key={index}> 
          {/* Go add a delete button from MUI */}
          {/* You can create a one line function, so that you can
          call a function with specific arguments without it being
          fired immediately, the issue is dealing with the deleteToDo event*/}
            <ListItem secondaryAction=
            {<IconButton 
              edge="end"
              onClick={ ()=> {deleteTodoItem(index)}}>
              <DeleteIcon />
            </IconButton>}>
              <ListItemText primary={todo}>
                
              </ListItemText>
            </ListItem>
            <Divider/>
          </Fragment>

        })
      }
      </List>
      )
}
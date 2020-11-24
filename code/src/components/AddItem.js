import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todoList } from '../reducers/todoList'
import styled from 'styled-components'

const AddItem = () => {
  const dispatch = useDispatch()
  const [todoValue, setTodoValue] = useState("")

  const submitTodo = (e) => {
    e.preventDefault()
    dispatch(todoList.actions.addTask(todoValue))
    setTodoValue("")

  }
  
  return (
    <Form className="add-item collection" onSubmit={(e) => submitTodo(e)}>
      <label htmlFor="addItem"></label>
      <Input 
        id="addItem" 
        type="text" 
        onChange={(e) => setTodoValue(e.target.value)}
        placeholder="+ Add new task"
        value={todoValue}
      />
    </Form>
    )
}

const Form = styled.form`
  border: 0;
  background: transparent;
`
const Input = styled.input`
&::placeholder {
  font-size: 14px;
}
  `

export default AddItem
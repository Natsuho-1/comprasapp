import React from 'react'
import { useState } from 'react'
import Todo from './Todo'
import '../App.css';

const Form = () => {
    const [precio, setPrecio] = useState({})
    const [todo, setTodo] = useState({})
    const [todos, setTodos] = useState([
        {todo: "Botella con agua", precio:"1.50" },
        {todo: "Manzana", precio:"0.50" },
        {todo: "Coca Cola", precio:"0.90" },
        {todo: "Gatorade", precio:"1.00" },
        {todo: "Galleta", precio:"1.20" },
        {todo: "Jabon", precio:"1.70" },
        {todo: "Miel", precio:"2.50" },
        {todo: "Sandia", precio:"3.50" },
        {todo: "Flores", precio:"2.00" },
        {todo: "Targeta Claro", precio:"1.10" },
    ])
    const handleChange = e => setTodo({ [e.target.name]: e.target.value })
    const handleClick = e => {
        if (Object.keys(todo).length === 0 || todo.todo.trim() === "") {
            alert("No se pueden ingresar articulos sin nombre.")
            return
        }
        setTodos([...todos, todo])
    }

    const deleteTodo = indice => {
        const newTodos = [...todos]
        newTodos.splice(indice, 1)
        setTodos(newTodos)
    }
    return (
        <>
            <form className='formulario' onSubmit={e => e.preventDefault()}>
                <label>Agregar Articulo</label><br /><br />
                <input className='tdo' type="text" name='todo' onChange={handleChange} />
                <button className='btn1' onClick={handleClick}>Agregar</button><br />
                <label htmlFor="">________________________________________________________________________________________________</label><br />
                {
                    todos.map((value, index) => (<Todo todo={value.todo} precio={value.precio} key={index} deleteTodo={deleteTodo} />))                 
                }
                                <label htmlFor="">________________________________________________________________________________________________</label><br />
            </form>

        </>
    )
}
export default Form
import React from 'react'
import '../App.css';

const Todo = ({ todo, precio, index, deleteTodo }) => {
    return (
        <>
            <div className='list'>
                <div>

                </div>
                <div>

                </div>
                <div>
                    <a>{todo}</a>
                </div>
                <div className='left'>
                   
                </div>
                <div className='right'>
                {precio}
                </div>
                <div>
                <button className='btn-delete' onClick={() => deleteTodo(index)}>x</button>
                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </>
    )
}
export default Todo
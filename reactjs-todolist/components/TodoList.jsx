import React from 'react';
import TodoCard from './TodoCard';

export default function TodoList() {
    let todos = [
        "Wake up early",
        "Drink Water after waking up",
        "Join Computer Networking Classes",
        "Have a fibre rich lunch"
    ];

    return (
        <ul className='main'>
            {todos.map((todo, todoIndex) => {
                return (
                    <TodoCard key={todoIndex}>
                        <p>{todo}</p>
                    </TodoCard>
                );
            })}
        </ul>
    );
}

import React from 'react';

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
                    <li className='todoItem' key={todoIndex}>{todo}
                    <i class="fa-regular fa-pen-to-square"></i>
                    </li>
                );
            })}
        </ul>
    );
}

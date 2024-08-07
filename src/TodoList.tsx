
import { useState } from "react";

type TodoData = {
    id: number;
    text: string;
    done: boolean;
}

// https://ameliapham.github.io/www.ameliart.fr/public/initial-todos.json
const initialTodos: TodoData[] = [
    {
        id: 1,
        text: "Learn React",
        done: true
    },
    {
        id: 2,
        text: "Learn TypeScript",
        done: true
    },
    {
        id: 3,
        text: "Learn TSS",
        done: false
    }
];

export function TodoList() {

    const {addTodo, todos, updateTodo} = useTodos(initialTodos)

    return (
        <div>
            <h1>My Todo List</h1>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.done}
                            onChange={e => {

                                const isChecked = e.target.checked;

                                updateTodo({
                                    id: todo.id,
                                    done: isChecked
                                });

                            }}
                        />
                        <span>{todo.text}</span>
                    </li>
                ))}
            </ul>
            <button
                onClick={() => {
                    addTodo({
                        text: "New Todo"
                    });
                }}
            >
                Add Todo
            </button>
        </div>
    );

}

function useTodos(initialTodos: TodoData[]) {

    const [todos, setTodos] = useState<TodoData[]>(initialTodos);

    const addTodo = (params: { text: string; }) => {

        const { text } = params;
        const newTodo: TodoData = {
            id: Math.random(),
            text: text,
            done: false
        }

        const newTodos: TodoData[] = [
            ...todos,
            newTodo
        ]

        setTodos(newTodos)
    };


    const updateTodo = (params: { id: number; done: boolean; }) => {

        const { id, done } = params;

        /*
        const newTodos: TodoData[] = [];

        for (let i=0; i<todos.length; i++) {
            const todo = todos[i];
            newTodos.push({
                ...todo,
                done: id === todo.id ? done : todo.done
            })
        }
        setTodos(newTodos)
        */

        setTodos(todos.map(todo => ({
            ...todo,
            done: id === todo.id ? done : todo.done
        })))

    };

    return { todos, addTodo, updateTodo };

}
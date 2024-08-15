import { useState } from "react";
import { Todo } from "./Todo";

type TodoData = {
    id: number;
    text: string;
    done: boolean;
}

const initialTodos: TodoData[] = [
    {
        id: 1,
        text: "Doing homework React",
        done: false
    },
    {
        id: 2,
        text: "Cooking",
        done: true
    },
    {
        id: 3,
        text: "Doing homework JS",
        done: false
    },
]

export function TodoList() {
    const [todos, setTodos] = useState<TodoData[]>(initialTodos)
    const [inputValue, setInputValue] = useState<string>("")

    function addTodo(params: { text: string }) {
        const { text } = params
        const newTodo: TodoData = {
            id: Math.random(),
            text: text,
            done: false,
        }

        const newTodos: TodoData[] = [
            ...todos,
            newTodo
        ]
        setTodos(newTodos)
    }

    function checkTodo(params: { id: number, done: boolean }) {
        const { done, id } = params
        const newTodos: TodoData[] = []

        for (let i = 0; i < todos.length; i++) {
            const newTodo: TodoData = {
                id: todos[i].id,
                text: todos[i].text,
                done: id === todos[i].id ? done : todos[i].done
            }
            newTodos.push(newTodo)
        }

        setTodos(newTodos)
    }

    function deleteTodo(params: { id: number }) {
        const { id } = params
        const newTodos: TodoData[] = []

        for (let i = 0; i < todos.length; i++) {
            const newTodo: TodoData = {
                id: todos[i].id,
                text: todos[i].text,
                done: todos[i].done,
            }

            if (todos[i].id !== id) {
                newTodos.push(newTodo)
            }
        }

        setTodos(newTodos)

    }

    return (
        <div>
            <h1>New Todo List de Huong</h1>
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                />
                <button
                    disabled={inputValue === ""}
                    onClick={() => {
                        addTodo({ text: inputValue })
                        setInputValue("")
                    }}
                >Add</button>
            </div>
            <ul>
                {todos.map(todo => (
                    <Todo
                        key={todo.id}
                        done={todo.done}
                        text={todo.text}
                        onDoneChange={({ done }) => checkTodo({
                            id: todo.id,
                            done
                        })}
                        onDelete={() => deleteTodo({ id: todo.id })}
                    />
                ))}
            </ul>
        </div>
    )
}
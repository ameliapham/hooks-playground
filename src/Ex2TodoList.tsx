import { useState } from "react";
import { Todo } from "./Todo";
import { AddTodo } from "./AddTodo";

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

    function changeTextTodo(params: { id: number, text: string }) {
        const { id, text } = params

        const newTodos: TodoData[] = []

        for (let i = 0; i < todos.length; i++) {
            const newTodo: TodoData = {
                id: todos[i].id,
                text: id === todos[i].id ? text : todos[i].text,
                done: todos[i].done
            }

            newTodos.push(newTodo)
        }

        setTodos(newTodos)
    }

    return (
        <div>
            <h1>New Todo List de Huong</h1>
            <AddTodo
                onAddTodo={({ text }) => addTodo({ text })}
            />
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
                        onTextChange={({ text }) => changeTextTodo({ id: todo.id, text })}
                    />
                ))}
            </ul>
        </div>
    )
}
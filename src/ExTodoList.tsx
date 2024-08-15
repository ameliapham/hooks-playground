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

// id: 2, done: false

/*
setTodos([
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
        id: 2,
        text: "Doing homework JS",
        done: false
    },
])
*/

export function TodoList() {


    console.log("render")

    const [todos, setTodos] = useState<TodoData[]>(initialTodos)

    function addTodo(params: { text: string }) {
        const { text } = params
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

    }

    const [inputValue, setInputValue] = useState<string>("")

    function checkTodo(params: { id: number, done: boolean }) {
        const {id, done} = params;

        const newTodos: TodoData[] = [];

        for (let i = 0; i<todos.length; i++){
            const newTodo: TodoData = {
                id : todos[i].id,
                text : todos[i].text,
                done : id===todos[i].id ? done : todos[i].done 
            }
            newTodos.push(newTodo);
        }

        setTodos(newTodos)

    }

    return (
        <div>
            <h1>New Todo List</h1>
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
                    />
                ))}
            </ul>
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                >

                </input>
                <button
                    onClick={() => {
                        setInputValue("")
                        addTodo({ text: inputValue })
                    }}
                >Add new
                </button>
            </div>
        </div>
    )
}
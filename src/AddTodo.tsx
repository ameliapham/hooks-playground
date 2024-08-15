import { useState } from "react" 

type Props = {
    className?: string;
    onAddTodo: (params: {text: string}) => void;
}


export function AddTodo(props: Props) {

    const {onAddTodo, className} = props

    const [inputValue, setInputValue] = useState<string>("")

    return (
        <div className={className}>
            <input
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <button
                disabled={inputValue === ""}
                onClick={() => {
                    onAddTodo({ text: inputValue })
                    setInputValue("")
                }}
            >Add</button>
        </div>
    )
}
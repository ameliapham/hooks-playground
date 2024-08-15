import { useState } from "react";

export type Props = {
    className?: string;
    text: string
    done: boolean;
    onDelete: () => void;
    onDoneChange: (params: { done: boolean; }) => void;
    onTextChange: (params: { text: string }) => void;
}


export function Todo(props: Props) {

    const { className, text, done, onDoneChange, onDelete, onTextChange } = props;
    const [isEditing, setIsEditing] = useState(false)
    const [inputValue, setInputValue] = useState(text)

    return (
        <li className={className}>
            <input
                type="checkbox"
                checked={done}
                onChange={e => onDoneChange({ done: e.target.checked })}
            />
            {/*
            {(()=>{
                if(isEditing){
                    return <span>{text}</span>
                }else{
                    return <></>
                }
            })()}

            {!isEditing && <span>{text}</span>}
            {isEditing && <></> }
            */}

            {
                isEditing ?
                    <input
                        type="text"
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                    /> :
                    <span>{text}</span>
            }

            <button
                onClick={() => {
                    if (isEditing) {
                        onTextChange({ text: inputValue })
                        setIsEditing(false)
                    } else {
                        setIsEditing(true);
                    }
                }}
            >
                {isEditing ? "Validate" : "Edit"}
            </button>

            {/*
            {
                isEditing ?
                    <button
                        onClick={() => {
                            onTextChange({ text: inputValue })
                            setIsEditing(false)
                        }}
                    >Validate</button> :
                    <button
                        onClick={() => {
                            setIsEditing(true);
                        }}
                    >Edit</button>
            }
            */}

            <button
                onClick={() => onDelete()}
            >
                Delete
            </button>
        </li>
    )

}
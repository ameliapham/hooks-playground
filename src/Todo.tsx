export type Props = {
    className?: string;
    text: string
    done: boolean;
    onDelete: () => void;
    onDoneChange: (params: { done: boolean; }) => void;
}


export function Todo(props: Props) {

    const { className, text, done, onDoneChange, onDelete } = props;

    return (
        <li className={className}>
            <input
                type="checkbox"
                checked={done}
                onChange={e => onDoneChange({ done: e.target.checked })}
            />
            <span>{text}</span>

            <button
                onClick={() => onDelete()}
            >Delete</button>
        </li>
    )

}
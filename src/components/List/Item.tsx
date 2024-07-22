interface ItemsProps { 
    tarefa: string;
    tempo: string;
}

export default function Item({tarefa, tempo}: ItemsProps) {
    return (
        <li className="bg-slate-600 p-2 rounded-lg shadow-shape">
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}
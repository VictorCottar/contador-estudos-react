interface ItemsProps { 
    tarefa: string;
    tempo: string;
}

export default function Items({tarefa, tempo}: ItemsProps) {
    return (
        <li className="bg-slate-600 p-3 rounded-lg shadow-shape">
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}
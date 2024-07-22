interface ButtonProps { 
    tittleButton: string;
    type?: 'submit' | 'button' | 'reset';
}

export default function Button( {tittleButton, type}: ButtonProps) {
    return (
        <button type={type} className="p-3 bg-slate-600 rounded-lg hover:bg-slate-500 shadow-shape">
            {tittleButton}
        </button>
    )
}
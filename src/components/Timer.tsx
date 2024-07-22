import Button from "./Button";
import Clock from "./Clock";

export default function Timer() {
    return (
        <div className="w-[500px] px-16 py-12 bg-slate-900 flex flex-col text-center space-y-8 rounded-lg shadow-shape">
            <p className="text-2xl font-medium">Escolha um card e inicie o cronômetro</p>
            <div>
                <Clock />
            </div>
            <Button
                tittleButton='Iniciar' 
            />
        </div>
    )
}
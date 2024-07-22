import { Clock1 } from "lucide-react"

export default function Clock() {
    return (
        <div className="flex items-center justify-center bg-slate-800 p-2 rounded-lg font-bold gap-2">
            <Clock1 className="size-5"/>
           <div>
            <span>0</span>
            <span>1</span>
            <span> hr </span>
            <span>3</span>
            <span>0</span>
            <span> min </span>
            <span>0</span>
            <span>0</span>
            </div>
        </div>
    )
}
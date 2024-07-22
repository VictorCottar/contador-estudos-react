import { ListCheck } from 'lucide-react'
import Items from './Item'
import { TarefaProps } from '../../types/tarefa'

export default function List({ tarefas }: { tarefas: TarefaProps[] }) {

    return (
        <aside className='w-[500px] h-[740px] px-16 py-12 mb-5 bg-slate-900 flex flex-col space-y-7 rounded-lg shadow-shape'>
            <div className='flex gap-3 items-center justify-center'>
                <h2 className="text-3xl block font-medium">Estudos do dia</h2>
                <ListCheck className="size-7" />
            </div>
            <ul className="space-y-3">
                {tarefas.map((item, index) => (
                    <Items
                        key={index}
                        tarefa={item.tarefa}
                        tempo={item.tempo}
                    />
                ))}
            </ul>
        </aside>
    )
}
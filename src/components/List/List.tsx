import { Book } from 'lucide-react'
import Items from './Items'

export default function List() {
    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'Javascript',
        tempo: '01:30:00'
    }
    ]

    return (
        <aside className='w-[490px] mt-3 px-16 py-12 bg-slate-900 flex flex-col space-y-8 rounded-lg shadow-shape'>
            <div className='flex gap-2 items-center'>
                <h2 className="text-3xl block font-medium">Estudos do dia</h2>
                <Book className="size-7" />
            </div>
            <ul className="space-y-3">
                {tarefas.map((item, index) => (
                    <Items
                        key={index}
                        tarefa={item.tarefa}
                        tempo={item.tempo} />
                ))}
            </ul>
        </aside>
    )
}
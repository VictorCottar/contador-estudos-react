import { BookOpen } from 'lucide-react';
import Button from './Button';
import { useState } from 'react';
import { TarefaProps } from '../types/tarefa';

export default function Form({setTarefas}: {setTarefas: React.Dispatch<React.SetStateAction<TarefaProps[]>>}) {
    const [tarefa, setTarefa] = useState('');
    const [tempo, setTempo] = useState('00:00:00');


    function addEstudo(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const novaTarefa = {
            tarefa,
            tempo
        }

        setTarefas((tarefasAntigas) =>
            [
                ...tarefasAntigas,
                novaTarefa,
 
            ]);
        setTarefa('');

    }

    return (
        <form onSubmit={addEstudo} className='w-[500px] h-[420px] px-16 py-12 bg-slate-900 flex flex-col space-y-8 rounded-lg shadow-shape'>
            <div className='flex flex-col space-y-3'>
            <div className='flex gap-2 items-center'>
                <div className='flex gap-3 items-center'>
                <label htmlFor='tarefa' className='text-3xl font-medium'>
                    Adicione um estudo
                </label>
                <BookOpen className='size-7' />
                </div>
                </div>    
                <input
                    className='p-3 rounded-lg bg-slate-600 focus:outline-none shadow-shape'
                    type="text"
                    name='tarefa'
                    onChange={(event) => setTarefa(event.target.value)}
                    value={tarefa}
                    id='tarefa'
                    placeholder='O que você quer estudar?'
                    required
                />
            </div>
            <div className='flex flex-col space-y-3 mt-5'>
                <label htmlFor='tempo' className='text-3xl font-medium'>
                    Tempo
                </label>
                <input
                    className='p-3 rounded-lg bg-slate-600 focus:outline-none [color-scheme:dark] shadow-shape'
                    type="time"
                    step={1}
                    name='tempo'
                    value={tempo}
                    onChange={(event) => setTempo(event.target.value)}
                    id='tempo'
                    min='00:00:00'
                    max='05:00:00'
                    required
                />
            </div>
            <Button
                type='submit'
                tittleButton='Adicionar' 
            />
        </form>
    );
}
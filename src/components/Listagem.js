import React from 'react';
import vetor from '../assets/icons/vetor.svg';
import { Tarefa } from './Tarefa';

export const Listagem = props => {

    const { tarefas } = props;

    return (
        <div className={"container-listagem" + (tarefas && tarefas.length > 0 ? "" : "vazia")}>

            {tarefas && tarefas.length > 0 ?
                tarefas?.map(tarefa => <Tarefa tarefa={tarefa}
                    key={tarefa.id} />)
                :
                <>
                    <img src={vetor} alt="Nenhuma atividade encontrada" />
                    <p>Você ainda não possui tarefas cadastradas!</p>
                </>

            }

        </div>
    )
}
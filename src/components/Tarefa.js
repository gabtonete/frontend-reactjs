import React from 'react';
import elipse from '../assets/icons/elipse.svg'
import check from '../assets/icons/check.svg'
import moment from 'moment'

export const Tarefa = props => {

    const { tarefa } = props;

    return (
        <div className="container-tarefa">
            <img
                src={elipse} alt="Tarefa não concluída" />
            <div>
                <p>{tarefa?.nome}</p>
                <span>Previsão de conclusão em: {moment(tarefa?.dataPrevisaoConclusao).format('dd/MM/yyyy')}</span>
            </div>
        </div>
    )
}
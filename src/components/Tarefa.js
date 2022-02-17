import React from 'react';
import elipse from '../assets/icons/elipse.svg';
import check from '../assets/icons/check.svg';
import moment from 'moment';

export const Tarefa = props => {

    const { tarefa } = props;
    const {nome, dataPrevisaoConclusao, dataConclusao} = tarefa;

    const getDataText = (dtConclusao, dtPrevisaoConclusao ) => {
        if(dtConclusao) {
            return `Concluído em: ${moment(dtConclusao).format('Do MMMM YYYY')}`
        }else{
            return `Previsão de conclusão em: ${moment(dtPrevisaoConclusao).format('Do MMMM YYYY')}`
        }
    };
    
    return (
        <div className="container-tarefa">
            <img
                src={dataConclusao ? check : elipse}
                alt={dataConclusao ? "tarefa concluída" : "selecine a tarefa"} />
            <div>
                <p className={dataConclusao ? "concluido" : ""}>{nome}</p>
                <span>{getDataText(dataConclusao, dataPrevisaoConclusao)}</span>
            </div>
        </div>
    )
}
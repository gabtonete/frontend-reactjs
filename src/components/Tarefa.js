import React from 'react';
import elipse from '../assets/icons/elipse.svg';
import check from '../assets/icons/check.svg';
import moment from 'moment';

export const Tarefa = props => {

    const { tarefa } = props;
    const {nome, dataPrevistaConclusao, dataConclusao} = tarefa;

    const getDataText = (dtConclusao, dtPrevisaoConclusao ) => {
        if(dtConclusao) {
            return `Concluído em: ${moment(dtConclusao).format('DD/MM/yyyy')}`
        }else{
            return `Previsão de conclusão em: ${moment(dtPrevisaoConclusao).format('DD/MM/yyyy')}`
        }
    };
    
    return (
        <div className={"container-tarefa " + (dataConclusao == null ? "ativo" : "")}>
            <img
                src={dataConclusao ? check : elipse}
                alt={dataConclusao ? "tarefa concluída" : "selecione a tarefa"} />
            <div>
                <p className={dataConclusao ? "concluido" : ""}>{nome}</p>
                <span>{getDataText(dataConclusao, dataPrevistaConclusao)}</span>
            </div>
        </div>
    )
}
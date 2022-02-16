import React, { useState } from 'react';
import filtro from '../assets/icons/filtro.svg';

export const Filtros = props => {

    const [showFilters, setShowFilters] = useState(false);

    return (
        <div className="container-filtros">
            <div className="title">
                <span>Tarefas</span>
                <img 
                    onClick ={() => setShowFilters(!showFilters)}
                    src={filtro} 
                    alt="Filtrar tarefas" />
                <div className="form">
                    <div>
                        <label>Data prevista de conclusão:</label>
                        <input type="date" />
                    </div>
                    <div>
                        <label>até:</label>
                        <input type="date" />
                    </div>
                    <div className="line" />
                    <div>
                        <label>Status:</label>
                        <select>
                            <option value={0}>Todas</option>
                            <option value={1}>Ativas</option>
                            <option value={2}>Concluídas</option>
                        </select>
                    </div>
                </div>
            </div>
            {showFilters === true && (
                <div className="filtrosMobile">
                    <div>
                        <label>Período de:</label>
                        <input type="date" />
                    </div>
                    <div>
                        <label>até:</label>
                        <input type="date" />
                    </div>
                    <div>
                        <label>Status:</label>
                        <select>
                            <option value={0}>Todas</option>
                            <option value={1}>Ativas</option>
                            <option value={2}>Concluídas</option>
                        </select>
                    </div>
                </div>
            )}
        </div>
    )
}
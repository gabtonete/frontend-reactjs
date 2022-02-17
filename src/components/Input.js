import React, { useState } from 'react';


export const Input = props => {
    const {
        srcImg,
        srcAlt,
        inputType,
        inputName,
        inputPlaceholder,
        value,
        setValue
    } = props;

    return(
        <div className="input">
            <img src={srcImg} alt={srcAlt} />
            <input type={inputType} name={inputName} placeholder={inputPlaceholder}
                value={value} onChange={evento => setValue(evento.target.value)} />
        </div>
    )

}
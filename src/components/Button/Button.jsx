import React, { useState } from 'react';
import style from './Button.module.css';

function Button(props) {
    const { texto } = props
    
    const [isButtonDisabled, setButtonDisabled] = useState({ disabled: false })

    function meuClique() {
        setButtonDisabled({ disabled: true })
        
        setTimeout(() => {
            setButtonDisabled({ disabled: false })
        }, 30)
    }

    return (
        <li><button disabled={isButtonDisabled.disabled}
            className={style.btn}
            onClick={meuClique}>
                {texto}
               
        </button></li>
    )
}

export default Button
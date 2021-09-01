import React, { useState } from 'react';
import style from './Button.module.css';

function Button(props) {
    const { texto, width, height } = props
    
    const [isButtonDisabled, setButtonDisabled] = useState({ disabled: false })

    function meuClique() {
        setButtonDisabled({ disabled: true })
        
        setTimeout(() => {
            setButtonDisabled({ disabled: false })
        }, 30)
    }

    return (
        <button disabled={isButtonDisabled.disabled}
        style={{ width: width || '100%' , height:height||'2.5rem'}}
            className={style.btn}
            onClick={meuClique}>
                {texto}
               
        </button>
    )
}

export default Button
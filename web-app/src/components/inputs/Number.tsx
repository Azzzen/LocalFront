import React, {createRef} from "react";
import './inputs.scss'

const NumberInput = ({min = 0, max = -1, step = 1, title = '', placeholder = '', width = 100, tag = '', myRef = createRef<HTMLInputElement>()}): JSX.Element => {
    if (!((max == -1 || max > min) && min >= 0)) return <></>

    return (<div style={{width: `${width}%`}}>
        {title && <h3>{title}</h3>}
        {max > 0 && <input className={'generic-component'} type={'number'} placeholder={placeholder} step={step} min={min} max={max} name={tag} ref={myRef} style={{width: `100%`}}/>}
        {max == -1 && <input className={'generic-component'} type={'number'} placeholder={placeholder} step={step} min={min} name={tag} ref={myRef} style={{width: `100%`}}/>}
    </div>);
}

export default NumberInput;
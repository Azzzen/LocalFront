import React, {createRef, useEffect} from "react";
import './inputs.scss'

const RangeInput = ({min = 0, max = 100, step = 1, title = '', showContent = true, width = 100, tag = '', myRef = createRef<HTMLInputElement>()}) => {
    const [value, setValue] = React.useState<number>((min + max) / 2);
    const [color, setColor] = React.useState<string>();

    useEffect(() => {
        if (value < (min + max) / 3) setColor('red'); else if (value < ((min + max) / 3) * 2) setColor('orange'); else setColor('green');
    }, [value]);

    if (!(max > min && min >= 0 && (max - min) % step == 0 && step < max - min)) return <></>

    return (<div>
        {title && <h3>{title}</h3>}
        {showContent && value}
        <input className={`generic-component ${color}`} type={'range'} value={value} step={step} min={min} max={max} style={{width:`${width}%`}} name={tag} ref={myRef} onInput={newValue => {
            setValue(Number(newValue.currentTarget.value));
        }}/>
    </div>);
}

export default RangeInput;
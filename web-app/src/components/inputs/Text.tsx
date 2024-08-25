import React, {createRef, RefObject, useEffect, useRef, useState} from "react";
import './inputs.scss'

/**
 * A text component in the localshirt style
 *
 * @component
 * @param {Object} props - The component contains multiple props to customize it
 * @param {string} props.title - The title to be assigned to the Text
 * @param {string} props.placeholder - The placeholder to be displayed on top of the Text
 * @param {boolean} props.showContent - Whether or not to show the content
 * @param {number} props.width - The width you wish to set the Text to
 * @param {string} props.tag - The tag of the Text
 * @param {HTMLInputElement} props.myRef - A reference to the Text component
 * @returns {JSX.Element} The rendered Text component
 */
const TextInput = ({title = '', placeholder = '', showContent = true, width = 100, tag = '', myRef = createRef<HTMLInputElement>()}) => {

    return (<div style={{width: `${width}%`}}>
        {title && <h3>{title}</h3>}
        <input className={'generic-component'} type={showContent ? 'text' : 'password'} placeholder={placeholder} name={tag} ref={myRef} style={{width: `100%`}}/>
    </div>);
}

export default TextInput;
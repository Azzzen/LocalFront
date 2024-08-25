import React, {createRef, RefObject, useEffect, useState} from "react";
import './inputs.scss'

/**
 * A radio input component in the localshirt style
 *
 * @component
 * @param {Object} props - The component contains multiple props to customize it
 * @param {string} props.title - The title to be assigned to the RadioInput
 * @param {string} props.placeholder - The placeholder to be displayed on top of the RadioInput
 * @param {Array} props.inputResponses - The accepted input responses
 * @param {boolean} props.showContent - Whether or not to show the content
 * @param {Array} props.positiveResponses - The responses considered as positives
 * @param {string} props.tag - The tag of the RadioInput
 * @param {number} props.width - The width you wish to set the RadioInput to
 * @param {HTMLInputElement} props.myRef - A reference to the RadioInput component
 * @returns {JSX.Element} The rendered RadioInput component
 */
const RadioInput = ({
                        title = '',
                        placeholder = '',
                        inputResponses = ['true', 'false'],
                        showContent = false,
                        positiveResponses = ['true'],
                        tag = '',
                        width = 100,
                        myRef = createRef<HTMLInputElement>()
                    }) => {
    if (inputResponses.length < 2) return <></>

    const [selected, setSelected] = useState<string>(inputResponses[0]);

    return (<div className={'radio-input-generic-component-zone'}>
        {title && <h3>{title}</h3>}
        <div className={'radio-input-generic-component-list'} style={{width: `${width}%`}}>
            {inputResponses.map(response => {
                const valueWorth = positiveResponses.find(elem => elem == response) ? 'positive' : 'negative';
                return <div className={'radio-input-generic-component-individual'}>
                    <label
                        className={positiveResponses.length > 0 && inputResponses.find(elem => elem === positiveResponses[0]) ? valueWorth : ''}>
                        {selected == response && <input className={'generic-component'} type={'radio'}
                                                        placeholder={placeholder}
                                                        name={tag + '-' + response + '-' + valueWorth}
                                                        value={response}
                                                        onChange={(selection) => setSelected(selection.currentTarget.value)}
                                                        checked={selected === response}
                                                        ref={myRef}
                        />}
                        {selected != response && <input className={'generic-component'} type={'radio'}
                                                        placeholder={placeholder}
                                                        name={tag + '-' + response + valueWorth}
                                                        value={response}
                                                        onChange={(selection) => setSelected(selection.currentTarget.value)}
                                                        checked={selected === response}
                        />}
                        <div className={'selector'}>
                            {showContent && <p>{response}</p>}
                        </div>
                    </label>
                </div>
            })}
        </div>
    </div>);
}

export default RadioInput;
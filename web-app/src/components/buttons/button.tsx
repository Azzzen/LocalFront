import './button.scss'

/**
 * A simple button component in the localshirt style
 *
 * @component
 * @param {Object} props - The component accepts color, content, shadow and onClick as props
 * @param {string} props.color - The color to be assigned to the button
 * @param {string} props.content - The message to be displayed on the button
 * @param {boolean} props.shadow - Whether or not the button should display a shadow
 * @param {function} props.onClick - The click event handler
 * @returns {JSX.Element} The rendered button component
 */
const Button = ({color = 'transparent', content = '', shadow = false, onClick = () => {return;}}) => {
    return <div
        className={`button ${color} ${(shadow) ? 'shadow' : ''}`}
        onClick={onClick}>
        {content}
    </div>
}

export default Button;
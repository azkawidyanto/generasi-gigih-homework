import style from './button.css'

const Button = ({ variant = 'primary', icon, children, ...props }) => {
    return (
        <button className={style.button + ' ' + style['button-' + variant]} {...props} >
            {icon} {children}
        </button>
    )
}

export default Button
import style from "./style.module.css";
import { Button} from "@chakra-ui/button";

const Buttons = ({ variant = 'primary', icon, children, ...props }) => {
    return (
        <Button colorScheme="blue" variant="solid" mr="5" className={style.button + ' ' + style['button-' + variant]} {...props} >
            {icon} {children}
        </Button>
    )
}

export default Buttons
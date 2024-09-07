import { Navbar, Imagem, Titulo } from "./styles"
import efoodLogo from '../../assets/images/logo.svg'

function Header() {
    return (
        <Navbar>
            <Imagem>
                <img src={efoodLogo} alt="logo" />
            </Imagem>
                <Titulo>Viva experiências gastronômicas <br /> no conforto da sua casa</Titulo>
        </Navbar>
    )
}

export default Header
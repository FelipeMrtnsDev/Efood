import { Navbar, Information } from "./styles"
import efoodLogo from '../../assets/images/logo.svg'
import { Link } from "react-router-dom"

function HeaderPerfil() {
    return (
        <Navbar>
            <Information>
                <h2>Restaurantes</h2>
                <Link to='/'>
                    <img src={efoodLogo} alt="logo" />
                </Link>
                <p>0 produto(s) no carrinho</p>
            </Information>
        </Navbar>
    )
}

export default HeaderPerfil
import { Fundo, RedesSociais } from "./styles"
import efood from '../../assets/images/logo.svg'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

function Footer() {
    return(
        <Fundo>
            <img src={efood} alt="efood" />
            <RedesSociais>
                <FaInstagram size={20} />
                <FaFacebookF size={20} />
                <FaTwitter size={20} />
            </RedesSociais>
            <p>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. </p>
        </Fundo>
    )
}

export default Footer
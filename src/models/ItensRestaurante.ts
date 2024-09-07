class ItensRestaurante {
    id: number
    titulo: string
    imagem: string
    descricao: string
    alt?: string

    constructor(
        id: number,
        titulo: string,
        imagem: string,
        descricao: string,
        alt: string
    ) {
        this.id = id
        this.titulo = titulo
        this.imagem = imagem
        this.descricao = descricao
        this.alt = alt
    }
}

export default ItensRestaurante
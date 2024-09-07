class Restaurante {
    imagem: string
    alt: string
    titulo: string
    avaliacao: number
    descricao: string
    etiqueta1: string
    etiqueta2?: string
    id: number

    constructor(
        imagem: string,
        alt: string,
        titulo: string,
        avaliacao: number,
        descricao: string,
        etiqueta1: string,
        id: number,
        etiqueta2?: string
    ) {
        this.imagem = imagem
        this.alt = alt
        this.titulo = titulo
        this.avaliacao = avaliacao
        this.descricao = descricao
        this.etiqueta1 = etiqueta1
        this.etiqueta2 = etiqueta2
        this.id = id
    }
}

export default Restaurante


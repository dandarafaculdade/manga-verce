
export type Manga = {
  id: number
  titulo: string
  autor: string
  genero: string
  ano: number
  imagem: string
}

export type Personagem = {
  id: number
  nome: string
  manga: string
  imagem: string
}

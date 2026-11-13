
import { useState } from 'react'
import type { Manga } from '../data/tipos'

type CardMangaProps = {
  manga: Manga
}

function CardManga({ manga }: CardMangaProps) {
  const [favorito, setFavorito] = useState(false)

  function alternarFavorito() {
    setFavorito(!favorito)
  }

  return (
    <article className="card-manga">
      <div className="capa-manga">
        <img
          src={manga.imagem}
          alt={`Capa do mangá ${manga.titulo}`}
        />
      </div>

      <div className="informacoes-manga">
        <h3>{manga.titulo}</h3>

        <p><strong>Autor:</strong> {manga.autor}</p>
        <p><strong>Gênero:</strong> {manga.genero}</p>
        <p><strong>Ano:</strong> {manga.ano}</p>

        <button
          type="button"
          className={`botao-favorito ${favorito ? 'ativo' : ''}`}
          onClick={alternarFavorito}
          aria-pressed={favorito}
        >
          {favorito ? '★ Favoritado' : '☆ Favoritar'}
        </button>
      </div>
    </article>
  )
}

export default CardManga

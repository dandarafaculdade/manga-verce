
import { mangas } from '../data/mangas'
import CardManga from './CardManga'

function ListaMangas() {
  return (
    <section id="mangas" className="biblioteca">
      <h2>Biblioteca de Mangás</h2>
      <p>Confira nossas recomendações de leitura.</p>

      <div className="grade-mangas">
        {mangas.map((manga) => (
          <CardManga
            key={manga.id}
            manga={manga}
          />
        ))}
      </div>
    </section>
  )
}

export default ListaMangas
